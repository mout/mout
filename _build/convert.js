// convert AMD modules into node.js compatible

var SRC_FOLDER = 'src',
    NODE_FOLDER = 'pkg';


// ---

var _fs = require('fs'),
    _path = require('path'),
    _wrench = require('wrench');

// ---


if ( _fs.existsSync(NODE_FOLDER) ) {
    _wrench.rmdirSyncRecursive(NODE_FOLDER);
}

_fs.mkdirSync( NODE_FOLDER );


var files = _wrench.readdirSyncRecursive(SRC_FOLDER);

files.forEach(function(name){
    var pathSrc = _path.join(SRC_FOLDER, name);
    var pathDist = _path.join(NODE_FOLDER, name);

    if ( _fs.statSync(pathSrc).isFile() ) {
        // prepend amdefine
        var content = "if (typeof define !== 'function') { var define = require('amdefine')(module) }\n\n";
        content += _fs.readFileSync(pathSrc, 'utf-8');
        _fs.writeFileSync(pathDist, content, 'utf-8');
    } else if ( ! _fs.existsSync(pathDist) ) {
        _fs.mkdirSync( pathDist );
    }

});


