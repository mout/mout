
// convert AMD modules into node.js compatible modules

var _options = require('./options');

var SRC_FOLDER = _options.SRC_FOLDER,
    ROOT_FOLDER = _options.ROOT_FOLDER,
    ENCODING = _options.ENCODING;


// ---

var _fs = require('fs'),
    _path = require('path'),
    _wrench = require('wrench');

// ---


// Transform all the src folder files to node.js and put them in the root folder
// so user can require a specific amd-utils module

var files = _wrench.readdirSyncRecursive(SRC_FOLDER);

files.forEach(function(name){
    var pathSrc = _path.join(SRC_FOLDER, name);
    var pathDist = _path.join(ROOT_FOLDER, name);

    if ( _fs.statSync(pathSrc).isFile() ) {
        // prepend amdefine
        var content = "if (typeof define !== 'function') { var define = require('amdefine')(module) }\n\n";
        content += _fs.readFileSync(pathSrc, ENCODING);
        _fs.writeFileSync(pathDist, content, ENCODING);
    } else if ( ! _fs.existsSync(pathDist) ) {
        _fs.mkdirSync( pathDist );
    }

});
