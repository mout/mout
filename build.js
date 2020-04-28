// node.js based build script
// run `node build -h` for usage information

const _helpers = require('./_build/helpers');
const _config = require('./_build/config');
const _cli = require('commander');
const _path = require('path');

_cli.option('-s, --silent', 'suppress log messages.');

_cli.command('doc')
    .description('build documentation.')
    .action(buildDocs);

_cli.command('pkg')
    .description('update packages and specs')
    .action(updatePackages);

_cli.command('add <moduleName> [templateName]')
    .description('add a new module.')
    .action(addModule);

_cli.command('mv <moduleName> <newName>')
    .description('rename module.')
    .action(renameModule);

_cli.command('cjs <destinationPath>')
    .description('convert mout into a node.js compatible package.')
    .action(convert);

_cli.command('release <version>')
    .description('bump version number, run tests, git tag, publish')
    .action(release);

_cli.command('testling')
    .description('prepare files for ci.testling.com')
    .action(generateTestBundle);

_cli.command('prune')
    .description('remove cjs files created during "release"')
    .action(prune);

_cli.parse(process.argv);

// show help by default
if (!_cli.args.length) {
    _cli.outputHelp();
    process.exit(0);
}

function buildDocs() {
    const mdoc = require('mdoc');
    mdoc.run({
        inputDir: 'doc',
        outputDir: 'doc_html',
        baseTitle: 'mout',
        indexContentPath: 'README.md',
        templatePath: '_build/doc_template'
    });
}

function updatePackages() {
    const pkg = require('./_build/package');
    pkg.updateAllPackages();
}

function addModule(moduleName, templateName) {
    const add = require('./_build/add');
    add.createSource(moduleName, templateName);
    add.createSpec(moduleName);
}

function renameModule(moduleName, newName) {
    const rename = require('./_build/rename');
    rename.renameModule(moduleName, newName);
}

function convert(destinationPath) {
    const glob = _path.join(_config.SRC_FOLDER, '/**/**.js');
    _helpers.echo('Converting modules to node.js:');
    require('nodefy').batchConvert(glob, destinationPath, function(err, results) {
        if (err) {
            console.error(err.toString());
            process.exit(1);
        }

        function checkKeys(mod, name) {
            let keys;
            try {
                keys = Object.keys(mod);
            } catch (err) {
                throw new Error(`"${name}" is not an object`);
            }
            if (!keys.length) {
                throw new Error(`"${name}" does't contain any enumerable properties`);
            }
        }

        try {
            // we load the index file and check if all the properties contain
            // keys to make sure module conversion worked properly this will
            // avoid npm publish mistakes like mout/mout#127
            const index = require(_path.join('./', destinationPath, 'index'));
            checkKeys(index, 'mout');
            for (const key in index) {
                if (key !== 'VERSION') checkKeys(index[key], `mout.${key}`);
            }
        } catch (err) {
            console.error('node.js module conversion went wrong:');
            console.error(err.toString());
            process.exit(1);
        }

        results = results.map(function({ outputPath }) {
            return outputPath;
        });
        _helpers.echoList(results);
        _helpers.echo('Finished node.js conversion');
    });
}

function release(version) {
    if (!version) throw new Error('version is a required argument');

    version = String(version).replace(/[^\d\.]/g, '');

    const remote = require('./package.json').repository.url;

    updateJsonVersion('./package.json', version);
    updateChangelog('./CHANGELOG.md', version);

    _helpers.shellSeries(
        [
            // make sure we checkout master so git will warn about uncommited
            // changes and it will also avoid publishing wrong branch
            'git checkout master',
            // scripts.pretest already generates the packages
            'npm test --coverage',
            'git add -A',
            'git commit --verbose',
            `git tag v${version}`,
            `git push ${remote}`,
            'git push --tags',
            // we do not rely on npm.scripts.prepublish because of
            // https://github.com/isaacs/npm/issues/3856
            'node build cjs .',
            'npm publish',
            'node build prune'
        ],
        function(err) {
            if (err) {
                console.error(err.toString());
                process.exit(1);
            }
        }
    );
}

function updateJsonVersion(path, version) {
    const target = require(path);
    const fs = require('fs');
    target.version = version;
    fs.writeFileSync(path, JSON.stringify(target, null, '  '), _config.ENCODING);
}

function updateChangelog(path, version) {
    const fs = require('fs');
    let content = fs.readFileSync(path).toString();
    const release = `v${version} (${today()})`;
    const dashedLine = new Array(release.length + 1).join('-');
    // add version number and release date to changelog if first h2 doesn't
    // start with "v"
    content = content.replace(/^(?!v)[^\n]+\n\-+/m, `${release}\n${dashedLine}`);
    fs.writeFileSync(path, content, _config.ENCODING);
}

function today() {
    // YYYY/MM/DD
    const date = new Date();
    let dateString = '';
    dateString += date.getFullYear();
    dateString += `/${pad(date.getMonth() + 1)}`;
    dateString += `/${pad(date.getDate())}`;
    return dateString;
}

function pad(val) {
    val = String(val);
    if (val.length < 2) {
        val = `0${val}`;
    }
    return val;
}

// ci.testling.com can't load relative resources so we need to bundle all the
// source files and tests into few files to make it work properly.
// we can't use rawgithub.com to load the files dynamically since it can
// timeout and was causing more issues (see #10).
function generateTestBundle() {
    const rjs = require('requirejs');
    _helpers.echo('generateTestBundle: generating AMD bundles...');

    // yes, it's ugly but works for now.
    rjs.optimize(
        {
            logLevel: 3,
            baseUrl: '.',
            optimize: 'none',
            name: 'mout/index',
            paths: {
                mout: 'src'
            },
            out: 'tests/testling/src.js'
        },
        function() {
            rjs.optimize(
                {
                    logLevel: 3,
                    baseUrl: '.',
                    optimize: 'none',
                    name: 'spec/spec-index',
                    paths: {
                        mout: 'empty:',
                        spec: 'tests/spec'
                    },
                    out: 'tests/testling/specs.js'
                },
                function() {
                    _helpers.echo('generateTestBundle: done.');
                }
            );
        }
    );
}

function prune() {
    const ls = _helpers.getFolderStructure('./src');
    const rimraf = require('rimraf');
    const rm = line => rimraf.sync(_path.basename(line));
    ls.folders.map(rm);
    ls.files.map(convertJsToTsFile).map(rm);
}

function convertJsToTsFile(path) {
    const parts = path.split('.');
    parts.pop();
    parts.push('js');
    return parts.join('.');
}
