/*jshint node:true */
"use strict";


// automatically generates package modules and specs



// ---


var _fs = require('fs'),
    _path = require('path'),
    _helpers = require('./helpers'),
    _config = require('./config'),
    _add = require('./add');


var echo = _helpers.echo;
var echoList = _helpers.echoList;
var getFolderStructure = _helpers.getFolderStructure;
var purgeFiles = _helpers.purgeFiles;
var specPath = _helpers.specPath;
var srcPath = _helpers.srcPath;


// ---


exports.updateAllPackages = function(){
    echo('updating packages:');
    var srcStructure = getFolderStructure( srcPath() );
    purgeFiles( srcStructure.files );
    srcStructure.folders.forEach( makePackage );

    // specs
    echo('updating specs:');
    var specsFiles = getFolderStructure( specPath() ).files;
    purgeFiles( specsFiles );
    //make packages based on src... ensure all source files have specs.
    srcStructure.folders.forEach( makeSpecGroup );

    makeSpecRunner();
    makeIndex();
};


exports.updatePackage = function(packageName){
    echo('updating packages:');
    makePackage( srcPath(packageName) );
    makeIndex();
};


exports.updateSpecGroup = function(packageName){
    echo('updating specs:');
    makeSpecGroup( srcPath(packageName) );
    makeSpecRunner();
};


// ---



var pkgTemplate = _helpers.compileModuleTemplate('pkg');
var indexTemplate = _helpers.compileModuleTemplate('index');


function makePackage(name){
    var packageFolder = _path.basename(name);
    var structure = getFolderStructure(name);

    var modules = structure.files.map(function(fileName){
        return {
            'name' : _path.basename(fileName, '.js'),
            'package' : packageFolder
        };
    });

    _fs.writeFileSync(name + '.js', pkgTemplate({'modules' : modules}), 'utf-8');
    echoList(name +'.js');
}


function makeIndex(){
    var packages = getFolderStructure( srcPath() ).folders;

    var modules = packages.map(function(fileName){
        var name = _path.basename(fileName);
        return {
            name: name,
            path: './'+ name
        };
    });

    // function is a reserved keyword so we create an alias (#119)
    modules.push({
        name: 'fn',
        path: './function'
    });

    var indexPath = srcPath('index.js');
    var packageJson = require(__dirname +'/../package.json');
    _fs.writeFileSync(indexPath, indexTemplate({
        modules : modules,
        version : packageJson.version
    }), 'utf-8');
    echo('updated index:', indexPath);
}



// ---



var specTemplate = _helpers.compileSpecTemplate('default'),
    specPackageTemplate = _helpers.compileSpecTemplate('package'),
    specIndexTemplate = _helpers.compileSpecTemplate('index');


function makeSpecGroup(name){
    var packageFolder = _path.basename(name);
    var structure = getFolderStructure(name);
    var specFileName = 'spec-'+ packageFolder +'.js';
    var specFilePath = specPath(specFileName);

    var modules = structure.files.map(function(fileName){
        return {
            'name' : _path.basename(fileName, '.js'),
            'package' : packageFolder
        };
    });

    purgeFiles( [specFilePath] );
    _fs.writeFileSync(specFilePath, specPackageTemplate({'modules' : modules}), 'utf-8');
    echoList( specFilePath );

    modules.forEach(function(mod){
        var spec = specPath(mod['package'], 'spec-'+ mod.name +'.js');
        if (! _fs.existsSync(spec) ) {
            // create spec if missing (all modules should have specs!!)
            _add.createSpec(mod['package'] +'/'+ mod.name);
        }
    });
}


function makeSpecRunner(){
    purgeFiles([ _config.SPEC_INDEX_PATH ]);

    var packages = getFolderStructure( srcPath() ).folders;
    var packagesNames = packages.map(function(val){
        return _path.basename(val);
    });

    _fs.writeFileSync(_config.SPEC_INDEX_PATH, specIndexTemplate({'packages' : packagesNames}), 'utf-8');
    echo('updated spec index: ', _config.SPEC_INDEX_PATH);
}


