
var fs = require('fs'),
    path = require('path');


function patternToRegex(pattern) {
    if(! pattern) {
        return (/^.*$/);
    }

    var result = '',
        parts = pattern.split(','),
        n = parts.length,
        cur;

    while (n--) {
        cur = '';
        cur = '(';
        cur += parts[n]
                    .replace(/^\*\./, '.*\\.')
                    .replace(/\.\*$/, '\\..*');
        cur += ')';
        parts[n] = cur;
    }

    return new RegExp('^'+ parts.join('|') + '$');
}


exports.getFilesPaths = function(o){
    var paths = [],
        inputFiles = exports.readDirRecursive(o.inputDir, o.include, o.exclude);

    inputFiles.forEach(function(fname){
        var ext = path.extname(fname),
            fileDir = path.dirname(fname).replace(o.inputDir, '');

        paths.push({
            input : fname,
            output : path.join(o.outputDir, fileDir, path.basename(fname, ext) + o.outputExt)
        });
    });

    return paths;
};


exports.readDirRecursive = function(baseDir, include, exclude){
    var files = [],
        rInclude = patternToRegex(include),
        rExclude = exclude? patternToRegex(exclude) : false,
        curFiles,
        nextDirs,
        isDir = function(fname){
            return fs.statSync( path.join(baseDir, fname) ).isDirectory();
        },
        shouldInclude = function(fname){
            if( isDir(fname) || (rExclude && rExclude.test(fname)) ){
                return false;
            } else {
                return rInclude.test(fname);
            }
        };

    curFiles = fs.readdirSync(baseDir);
    nextDirs = curFiles.filter(isDir);
    curFiles = curFiles
                    .filter(shouldInclude)
                    .map(function(fname){
                        return path.join(baseDir, fname);
                    });

    files = files.concat( curFiles );

    while (nextDirs.length) {
        files = files.concat( exports.readDirRecursive( path.join(baseDir, nextDirs.shift()) , include, exclude) );
    }

    return files;
};


exports.processFile = function(fileInfo, fn){
    var fcontent = fs.readFileSync(fileInfo.input, 'utf-8');
    exports.mkdirs( path.dirname(fileInfo.output) );
    fs.writeFileSync(fileInfo.output, fn(fcontent), 'utf-8');
};


exports.mkdirs = function(dir, mode){
    mode = mode || '0777';

    var paths = dir.split('/'),
        prev = '',
        cur;

    for (var i = 0, n = paths.length; i < n; i += 1) {
        cur = path.join(prev, paths[i]);
        if(! path.existsSync(cur) ){
            fs.mkdirSync(cur, mode);
        }
        prev = cur;
    }

};
