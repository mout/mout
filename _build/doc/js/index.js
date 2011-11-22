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

var INPUT_DIR = 'src',
    OUTPUT_DIR = 'doc',
    INDEX_CONTENT = 'README.mdown';

// ---


writter.processFiles({
    baseTitle : 'AMD Utils',
    inputDir : INPUT_DIR,
    outputDir : OUTPUT_DIR,
    filterFiles : function(fileInfo){
        //Remove README of the root src folder.
        return (path.dirname(fileInfo.input) !== INPUT_DIR || path.basename(fileInfo.input) !== 'README.mdown');
    },
    include : '*.mdown,*.md,*.markdown',
    mapTocModule : function(ouputName, toc){
        //get module name based on file name
        return ouputName.replace('.html', '');
    },
    mapOutName : function(outputName){
        return outputName.replace('/README', '');
    },
    indexContent : getMdownContent(INDEX_CONTENT)
});


function getMdownContent(path){
    var mdown = fs.readFileSync(path, 'utf-8');
    return showdown.parse(mdown);
}


