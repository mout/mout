
// node.js based build script
// run `node build -h` for usage information

var _helpers = require('./_build/helpers');
var _config = require('./_build/config');
var _cli = require('commander');
var _path = require('path');


_cli
    .option('-s, --silent', 'suppress log messages.');

_cli
    .command('doc')
    .description('build documentation.')
    .action( cmd(buildDocs) );

_cli
    .command('pkg')
    .description('update packages and specs')
    .action( cmd(updatePackages) );

_cli
    .command('add <moduleName> [templateName]')
    .description('add a new module.')
    .action( cmd(addModule) );

_cli
    .command('mv <moduleName> <newName>')
    .description('rename module.')
    .action( cmd(renameModule) );

_cli
    .command('cjs <destinationPath>')
    .description('convert mout into a node.js compatible package.')
    .action( cmd(convert) );

_cli
    .command('release <version>')
    .description('bump version number, update packages and run tests')
    .action( cmd(release) );

_cli
    .command('ci')
    .description('prepare files for ci.testling.')
    .action( cmd(generateTestBundle) );

_cli.parse(process.argv);



// show help by default
if (!_cli.args.length) {
    _cli.outputHelp();
    process.exit(0);
}


// just a helper to run multiple commands in sequence and process global
// options before executing them.
function cmd(var_args){
    var fns = Array.prototype.slice.call(arguments);
    return function(){
        if (_cli.silent) {
            _helpers.isSilent = true;
        }
        var args = Array.prototype.slice.call(arguments);
        fns.forEach(function(fn){
            fn.apply(null, args);
        });
    };
}


// --


function buildDocs(){
    var mdoc = require('mdoc');
    mdoc.run({
        inputDir : 'doc',
        outputDir : 'doc_html',
        baseTitle : 'mout',
        indexContentPath : 'README.md',
        templatePath : '_build/doc_template'
    });
}


function updatePackages(){
    var pkg = require('./_build/package');
    pkg.updateAllPackages();
}


function addModule(moduleName, templateName){
    var add = require('./_build/add');
    add.createSource(moduleName, templateName);
    add.createSpec(moduleName);
}


function renameModule(moduleName, newName){
    var rename = require('./_build/rename');
    rename.renameModule(moduleName, newName);
}


function convert(destinationPath){
    var glob = _path.join(_config.SRC_FOLDER, '/**/**.js');
    _helpers.echo('Converting modules to node.js:');
    require('nodefy').batchConvert(glob, destinationPath, function(err, results){
        results = results.map(function(r){ return r.outputPath; });
        _helpers.echoList(results);
        _helpers.echo('Finished node.js conversion');
    });
}


function release(version){
    if (! version) throw new Error('version is a required argument');

    version = String(version).replace(/[^\d\.]/g, '');

    var remote = require('./package.json').repository.url;

    updateJsonVersion('./package.json', version);
    updateJsonVersion('./component.json', version);

    _helpers.shellSeries([
        'git checkout master',
        // scripts.pretest already generates the packages
        'npm test --coverage',
        'git add -A',
        'git commit --verbose',
        'git tag v'+ version,
        'git push '+ remote,
        'git push --tags',
        // scripts.prepublish already generates the cjs modules
        'npm publish',
        // TODO: use node instead of a shell script (so it works on windows)
        'sh _build/clean.sh'
    ], function(err){
        if (err) {
            console.log(err.toString());
            process.exit(1);
        }
    });
}


function updateJsonVersion(path, version) {
    var target = require(path);
    var fs = require('fs');
    target.version = version;
    fs.writeFileSync(path, JSON.stringify(target, null, '  '), _config.ENCODING);
}


// ci.testling.com can't load relative resources so we need to bundle all the
// source files and tests into few files to make it work properly.
// we can't use rawgithub.com to load the files dynamically since it can
// timeout and was causing more issues (see #10).
function generateTestBundle(){
    // tests folder is on .npmignore so it should only exist if user cloned
    // the repository directly which is enough to avoid running this action if
    // not necessary
    // ---
    // this is just a quick hack to circunvent testling limitations until they
    // update npm to 1.2.0, provide some environment variable, or support dynamic
    // load of specs/modules.

    var fs = require('fs');
    fs.exists('tests', function(exists){
        if (exists) {

            var rjs = require('requirejs');
            _helpers.echo('generateTestBundle: generating AMD bundles...');

            // yes, it's ugly but works for now.
            rjs.optimize({
                logLevel : 3,
                baseUrl : '.',
                optimize: 'none',
                name : 'mout/index',
                paths : {
                    'mout' : 'src'
                },
                out : 'tests/testling/src.js'
            }, function(){

                rjs.optimize({
                    logLevel : 3,
                    baseUrl : '.',
                    optimize: 'none',
                    name : 'spec/spec-index',
                    paths : {
                        'mout' : 'empty:',
                        'spec' : 'tests/spec'
                    },
                    out : 'tests/testling/specs.js'
                }, function(){
                    _helpers.echo('generateTestBundle: done.');
                });

            });

        }
    });
}

