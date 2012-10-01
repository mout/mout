// convert AMD modules into node.js compatible

var SRC_FOLDER = 'src',
    ROOT_FOLDER = '.';


// ---

var _fs = require('fs'),
    _path = require('path'),
    _wrench = require('wrench');

// ---

// Remove all files from the root expect some
var files = _fs.readdirSync(ROOT_FOLDER);
var ignore = ['_build', 'package.json', '.jshintrc', 'pkg', 'doc', 'src', 'node_modules', 'README.md', '.git'];
files.forEach(function(name){
    var path = _path.join(ROOT_FOLDER, name);

    if (ignore.indexOf(name) === -1) {
        if ( _fs.statSync(path).isFile() ) {
            _fs.unlinkSync(path);
        } else {
            _wrench.rmdirSyncRecursive(path);
        }
    }

});

// Transform all the src folder files and put them in the node folder
var files = _wrench.readdirSyncRecursive(SRC_FOLDER);
files.forEach(function(name){
    var pathSrc = _path.join(SRC_FOLDER, name);
    var pathDist = _path.join(ROOT_FOLDER, name);

    if ( _fs.statSync(pathSrc).isFile() ) {
        // prepend amdefine
        var content = "if (typeof define !== 'function') { var define = require('amdefine')(module) }\n\n";
        content += _fs.readFileSync(pathSrc, 'utf-8');
        _fs.writeFileSync(pathDist, content, 'utf-8');
    } else if ( ! _fs.existsSync(pathDist) ) {
        _fs.mkdirSync( pathDist );
    }

});