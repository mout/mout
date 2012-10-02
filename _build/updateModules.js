
// automatically generates package modules and specs

var SRC_FOLDER = 'src',
    SPEC_FOLDER = 'tests/spec',
    SPEC_RUNNER_PATH = 'tests/specRunner.html';


// ---


var _fs = require('fs'),
    _path = require('path'),
    _handlebars = require('Handlebars');


exports.run = function(){
    var srcStructure = getFolderStructure(SRC_FOLDER);
    purgeFiles(srcStructure.files);
    makePackages(srcStructure.folders);

    purgeFiles(getFolderStructure(SPEC_FOLDER).files);
    //make packages based on src... ensure all source files have specs.
    makeSpecs(srcStructure.folders);
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
            return hasJsExtension(name) && _fs.statSync(name).isFile();
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


// ---


function compileTemplate(name) {
    return _handlebars.compile( _fs.readFileSync( _path.join(__dirname, name +'.hbs'), 'utf-8') );
}


var pkgTemplate = compileTemplate('pkg');
var indexTemplate = compileTemplate('index');

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
        console.log('  updating package: ', name +'.js');
    });

    var modules = packages.map(function(fileName){
        return {
            name : _path.basename(fileName)
        };
    });
    _fs.writeFileSync('src/index.js', indexTemplate({'modules' : modules}), 'utf-8');
    console.log('  updating package: src/index.js');

}



// ---



var specTemplate = compileTemplate('spec'),
    specPackageTemplate = compileTemplate('specPackage'),
    specRunnerTemplate = compileTemplate('specRunner');


function makeSpecs(packages){

    packages.forEach(function(name){
        var packageFolder = _path.basename(name);
        var structure = getFolderStructure(name);

        var modules = structure.files.map(function(fileName){
            return {
                'name' : _path.basename(fileName, '.js'),
                'package' : packageFolder
            };
        });

        var specFileName = 'spec-'+ packageFolder +'.js';
        _fs.writeFileSync(_path.join(SPEC_FOLDER, specFileName), specPackageTemplate({'modules' : modules}), 'utf-8');
        console.log('  updating spec: ', specFileName);

        modules.forEach(function(mod){
            var specPath = _path.join(SPEC_FOLDER, mod['package'], 'spec-'+ mod.name +'.js');
            if (! _fs.existsSync(specPath) ) {
                _fs.writeFileSync(specPath, specTemplate(mod), 'utf-8');
                console.log('  created spec: ', specPath);
            }
        });
    });


    var packagesNames = packages.map(function(val){
        return _path.basename(val);
    });
    _fs.writeFileSync(SPEC_RUNNER_PATH, specRunnerTemplate({'packages' : packagesNames}), 'utf-8');
    console.log('  updating spec runner: ', SPEC_RUNNER_PATH);
}



