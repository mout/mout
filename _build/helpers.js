/*jshint node:true */
"use strict";



var _fs = require('fs'),
    _path = require('path'),
    _handlebars = require('handlebars'),
    _config = require('./config');




// Paths
// --------

// curried version of path.join()
exports.srcPath = _path.join.bind(_path, _config.SRC_FOLDER);
exports.specPath = _path.join.bind(_path, _config.SPEC_FOLDER);



// Handlebars
// ------------

exports.compileTemplate = function (name) {
    var path = _path.join(_config.TEMPLATES_FOLDER, name +'.hbs');
    var file = _fs.readFileSync(path);
    return _handlebars.compile( file.toString() );
};


exports.compileSpecTemplate = function(name){
    return exports.compileTemplate( _path.join('spec', name) );
};


exports.compileModuleTemplate = function(name){
    return exports.compileTemplate( _path.join('mod', name) );
};


_handlebars.registerHelper('csv', function(items, options){
    items = items.map(function(val){
        return options.fn(val);
    });
    return items.join(', ');
});


_handlebars.registerHelper('list', function(items, options){
    items = items.map(function(val){
        return options.fn(val);
    });
    return items.join(',\n    ');
});



// File system
// -----------

exports.getFolderStructure = function(folder){
    var fileNames = _fs.readdirSync( _path.normalize(folder) );
    fileNames = fileNames.map(function(val){
        return _path.join(folder, val);
    });
    var structure = {
        'folders' : fileNames.filter(function(name){
            return _fs.statSync(name).isDirectory();
        }),
        'files' : fileNames.filter(function(name){
            return hasJsExtension(name) && _fs.statSync(name).isFile();
        })
    };

    // some file systems might not return sorted items, it's better to
    // normalize behavior so git blame works as expected
    structure.folders = structure.folders.sort();
    structure.files = structure.files.sort();

    return structure;
};


function hasJsExtension(name) {
    return (/\.js$/).test(name);
}


exports.purgeFiles = function(files){
    files.forEach(function(name){
        if ( hasJsExtension(name) && _fs.existsSync(name) ) {
            _fs.unlinkSync(name);
        }
    });
};


// Other
// -----

// add some indentation to the log message, makes it easier to read during
// build. Also so we can toggle the log messages easily.

exports.isSilent = false;

exports.echo = function (var_args){
    if (exports.isSilent) return;
    var args = Array.prototype.slice.call(arguments);
    args[0] = ' '+ args[0];
    console.log.apply(console, args);
};

exports.echoList = function(var_args){
    if (exports.isSilent) return;
    var args = Array.prototype.slice.call(arguments);
    args[0] = '  - '+ args[0];
    console.log.apply(console, args);
};
