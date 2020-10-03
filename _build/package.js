'use strict';

// automatically generates package modules and specs

// ---

const _fs = require('fs');
const _path = require('path');
const _helpers = require('./helpers');
const _config = require('./config');
const _add = require('./add');
const _CLIEngine = require('eslint').CLIEngine;

const _cli = new _CLIEngine({ fix: true });

const echo = _helpers.echo;
const echoList = _helpers.echoList;
const getFolderStructure = _helpers.getFolderStructure;
const purgeFiles = _helpers.purgeFiles;
const specPath = _helpers.specPath;
const srcPath = _helpers.srcPath;

// ---

exports.updateAllPackages = function() {
    echo('updating packages:');
    const srcStructure = getFolderStructure(srcPath());
    purgeFiles(srcStructure.files);
    srcStructure.folders.forEach(makePackage);

    // specs
    echo('updating specs:');
    const specsFiles = getFolderStructure(specPath()).files;
    purgeFiles(specsFiles);
    // make packages based on src... ensure all source files have specs.
    srcStructure.folders.forEach(makeSpecGroup);

    makeSpecRunner();
    makeIndex();
};

exports.updatePackage = function(packageName) {
    echo('updating packages:');
    makePackage(srcPath(packageName));
    makeIndex();
};

exports.updateSpecGroup = function(packageName) {
    echo('updating specs:');
    makeSpecGroup(srcPath(packageName));
    makeSpecRunner();
};

// ---

const pkgTemplate = _helpers.compileModuleTemplate('pkg');
const indexTemplate = _helpers.compileModuleTemplate('index');

function lintAndVerify(input) {
    return _cli.executeOnText(input).results[0].output;
}

function makePackage(name) {
    const packageFolder = _path.basename(name);
    const structure = getFolderStructure(name);

    const modules = structure.files.map(function(fileName) {
        return {
            name: _path.basename(fileName, '.js'),
            package: packageFolder
        };
    });
    _fs.writeFileSync(`${name}.js`, lintAndVerify(pkgTemplate({ modules })), 'utf-8');
    echoList(`${name}.js`);
}

function makeIndex() {
    const packages = getFolderStructure(srcPath()).folders;

    const modules = packages.map(function(fileName) {
        const name = _path.basename(fileName);
        return {
            name: name === 'function' ? '_function' : name,
            path: `./${name}`
        };
    });

    // function is a reserved keyword so we create an alias (#119)
    modules.push({
        name: 'fn',
        path: './function'
    });

    const indexPath = srcPath('index.js');
    const packageJson = require(`${__dirname}/../package.json`);
    _fs.writeFileSync(
        indexPath,
        lintAndVerify(
            indexTemplate({
                modules,
                version: packageJson.version
            })
        ),
        'utf-8'
    );
    echo('updated index:', indexPath);
}

// ---

const specPackageTemplate = _helpers.compileSpecTemplate('package');
const specIndexTemplate = _helpers.compileSpecTemplate('index');

function makeSpecGroup(name) {
    const packageFolder = _path.basename(name);
    const structure = getFolderStructure(name);
    const specFileName = `spec-${packageFolder}.js`;
    const specFilePath = specPath(specFileName);

    const modules = structure.files.map(function(fileName) {
        return {
            name: _path.basename(fileName, '.js'),
            package: packageFolder
        };
    });

    purgeFiles([specFilePath]);
    _fs.writeFileSync(specFilePath, lintAndVerify(specPackageTemplate({ modules })), 'utf-8');
    echoList(specFilePath);

    modules.forEach(function(mod) {
        const spec = specPath(mod['package'], `spec-${mod.name}.js`);
        if (!_fs.existsSync(spec)) {
            // create spec if missing (all modules should have specs!!)
            _add.createSpec(`${mod['package']}/${mod.name}`);
        }
    });
}

function makeSpecRunner() {
    purgeFiles([_config.SPEC_INDEX_PATH]);

    const packages = getFolderStructure(srcPath()).folders;
    const packagesNames = packages.map(function(val) {
        return _path.basename(val);
    });

    _fs.writeFileSync(
        _config.SPEC_INDEX_PATH,
        lintAndVerify(specIndexTemplate({ packages: packagesNames })),
        'utf-8'
    );
    echo('updated spec index: ', _config.SPEC_INDEX_PATH);
}
