
// automatically generates package modules

var BASE_FOLDER = 'src';


var _fs = require('fs'),
    _path = require('path'),
    _handlebars = require('Handlebars');


exports.run = function(){
    var structure = getFolderStructure(BASE_FOLDER);
    purgeFiles(structure.files);
    makePackages(structure.folders);
};

function getFolderStructure(folder){

    var fileNames = _fs.readdirSync( _path.normalize(folder) );
    fileNames = fileNames.map(function(val){
        return _path.join(folder, val);
    });

    return {
        'folders' : fileNames.filter(function(name){
            return _fs.statSync(name).isDirectory();
        }),
        'files' : fileNames.filter(function(name){
            return _fs.statSync(name).isFile();
        })
    };

}

function hasJsExtension(name) {
    return (/\.js$/).test(name);
}

function purgeFiles(files){
    files.forEach(function(name){
        if ( hasJsExtension(name) ) {
            _fs.unlinkSync(name);
        }
    });
}



var pkgTemplate = _handlebars.compile( _fs.readFileSync( _path.join(__dirname, 'pkg.hbs'), 'utf-8') );

_handlebars.registerHelper('moduleList', function(items, fn){
    items = items.map(function(val){
        return fn(val);
    });
    return items.join(',\n        ');
});


function makePackages(packages){

    packages.forEach(function(name){
        var packageFolder = _path.basename(name);
        var structure = getFolderStructure(name);

        var modules = structure.files.map(function(fileName){
            return {
                'name' : _path.basename(fileName, '.js'),
                'package' : packageFolder
            };
        });

        _fs.writeFileSync(name + '.js', pkgTemplate({'modules' : modules}), 'utf-8');
    });

}
