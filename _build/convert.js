
// convert AMD modules into node.js compatible modules

var _config = require('./config');
var _helpers = require('./helpers');

var SRC_FOLDER = _config.SRC_FOLDER,
    ENCODING = _config.ENCODING;

var echo = _helpers.echo;
var echoList = _helpers.echoList;


// ---

var _fs = require('fs'),
    _path = require('path'),
    _wrench = require('wrench');

// ---


// Transform all the src folder files to node.js and put them in the root folder
// so user can require a specific amd-utils module

exports.toNode = function(destinationPath){
    echo('Converting modules to node.js:');

    var files = _wrench.readdirSyncRecursive(SRC_FOLDER);

    files.forEach(function(name){
        var pathSrc = _path.join(SRC_FOLDER, name);
        var pathDist = _path.join(destinationPath, name);

        echoList(pathDist);

        if ( _fs.statSync(pathSrc).isFile() ) {
            // prepend amdefine
            var content = "if (typeof define !== 'function') { var define = require('amdefine')(module) }\n\n";
            content += _fs.readFileSync(pathSrc, ENCODING);
            _fs.writeFileSync(pathDist, content, ENCODING);
        } else if ( ! _fs.existsSync(pathDist) ) {
            _wrench.mkdirSyncRecursive( pathDist );
        }

    });

    echo('Finished node.js conversion');
};
