/**
 * build documentation based on markdown files.
 * @author Miller Medeiros
 * @version 0.1.0 (2011/11/22)
 */


var writter = require('./writter'),
    showdown = require('./lib/showdown'),
    fs = require('fs'),
    path = require('path');


// ---

var INPUT_DIR = path.normalize(__dirname +'/../content'),
    OUTPUT_DIR = 'doc',
    INDEX_CONTENT = 'README.mdown';

// ---


writter.processFiles({
    baseTitle : 'AMD Utils',
    inputDir : INPUT_DIR,
    outputDir : OUTPUT_DIR,
    indexContent : getMdownContent(INDEX_CONTENT)
});


function getMdownContent(path){
    var mdown = fs.readFileSync(path, 'utf-8');
    return showdown.parse(mdown);
}


