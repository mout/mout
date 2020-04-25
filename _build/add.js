'use strict';

// create stub module and failing spec for module if it doesn't exist

// ---

const _fs = require('fs');
const _path = require('path');
const _helpers = require('./helpers');
const _package = require('./package');

const echo = _helpers.echo;

// --

exports.createSource = function(name, template) {
    const sourcePath = toSourcePath(name);
    const packageName = _path.dirname(name);
    const sourceTemplate = _helpers.compileModuleTemplate(template || 'default');
    const fnName = _path.basename(name);

    createDir(sourcePath);

    const mod = {
        name: fnName,
        u_name: fnName.replace(/^\w/, function(c) {
            return c.toUpperCase();
        }),
        date: getFormattedDate()
    };
    _fs.writeFileSync(sourcePath, sourceTemplate(mod));

    echo('created module: ', sourcePath);

    // need to update package file
    _package.updatePackage(packageName);
};

exports.createSpec = function(name, template) {
    const specPath = toSpecPath(name);
    const specTemplate = _helpers.compileSpecTemplate(template || 'default');

    createDir(specPath);

    const mod = {
        name: _path.basename(name),
        package: _path.dirname(name)
    };

    _fs.writeFileSync(specPath, specTemplate(mod));
    echo('created spec: ', specPath);

    // need to update spec group
    _package.updateSpecGroup(mod['package']);
};

function createDir(moduleName) {
    // create package if it doesn't exist
    const packagePath = _path.dirname(moduleName);
    if (!_fs.existsSync(packagePath)) {
        _fs.mkdirSync(packagePath);
    }
}

function getFormattedDate() {
    const now = new Date();
    return `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())}`;
}

function pad(val) {
    val = String(val);
    if (val.length < 2) {
        return `0${val}`;
    } else {
        return val;
    }
}

function toSourcePath(name) {
    const path = _helpers.srcPath(name);
    return normalizePath(path);
}

function toSpecPath(name) {
    const path = _helpers.specPath(name.replace(/\/([\w\.\-\_]+)$/, '/spec-$1'));
    return normalizePath(path);
}

function normalizePath(path) {
    path += _path.extname(path) ? '' : '.js';
    path = _path.normalize(path);
    if (_fs.existsSync(path)) {
        console.error(`file "${path}" already exists and can't be overwritten.`);
        process.exit(1);
    }
    return path;
}
