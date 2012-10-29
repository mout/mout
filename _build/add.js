/*jshint node:true */
"use strict";


// create stub module and failing spec for module if it doesn't exist


// ---


var _fs = require('fs'),
    _path = require('path'),
    _helpers = require('./helpers'),
    _package = require('./package');

var echo = _helpers.echo;


// --


var sourceTemplate = _helpers.compileTemplate('module');
var specTemplate = _helpers.compileTemplate('spec');


// --


exports.createSource = function(name){
    var sourcePath = toSourcePath(name);
    var packageName = _path.dirname(name);

    createDir(sourcePath);

    var mod = {
        'name' : _path.basename(name),
        'date' : getFormattedDate()
    };
    _fs.writeFileSync(sourcePath, sourceTemplate(mod));

    echo('created module: ', sourcePath);

    // need to update package file
    _package.updatePackage( packageName );
};


exports.createSpec = function (name){
    var specPath = toSpecPath(name);

    createDir(specPath);

    var mod = {
        'name' : _path.basename(name),
        'package' : _path.dirname(name)
    };

    _fs.writeFileSync(specPath, specTemplate(mod));
    echo('created spec: ', specPath);

    // need to update spec group
    _package.updateSpec( mod['package'] );
};


function createDir(moduleName){
    // create package if it doesn't exist
    var packagePath = _path.dirname(moduleName);
    if (! _fs.existsSync(packagePath) ){
        _fs.mkdirSync(packagePath);
    }
}


function getFormattedDate(){
    var now = new Date();
    return now.getFullYear() +'/'+ pad(now.getMonth() + 1) +'/'+ pad(now.getDate());
}


function pad(val){
    val = String(val);
    if (val.length < 2) {
        return '0'+ val;
    } else {
        return val;
    }
}


function toSourcePath(name){
    var path = _helpers.srcPath(name);
    return normalizePath(path);
}


function toSpecPath(name){
    var path = _helpers.specPath( name.replace(/\/([\w\.\-\_]+)$/, '/spec-$1') );
    return normalizePath(path);
}


function normalizePath(path){
    path += (_path.extname(path)? '' : '.js');
    path = _path.normalize(path);
    if ( _fs.existsSync(path) ){
        throw new Error('file "'+ path +'" already exists and can\'t be overwritten.');
    }
    return path;
}

