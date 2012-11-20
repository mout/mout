
// node.js based build script
// run `node build -h` for usage information

var _helpers = require('./_build/helpers');
var _config = require('./_build/config');
var _cli = require('commander');
var _path = require('path');


_cli
    .option('-s, --silent', 'suppress log messages.');

_cli
    .command('doc')
    .description('build documentation.')
    .action( cmd(buildDocs) );

_cli
    .command('pkg')
    .description('update packages and specs')
    .action( cmd(updatePackages) );

_cli
    .command('deploy')
    .description('build documentation and update packages.')
    .action( cmd(buildDocs, updatePackages) );

_cli
    .command('add <moduleName> [templateName]')
    .description('add a new module.')
    .action( cmd(addModule) );

_cli
    .command('cjs <destinationPath>')
    .description('convert amd-utils into a node.js compatible package.')
    .action( cmd(convert) );


_cli.parse(process.argv);



// show help by default
if (!_cli.args.length) {
    _cli.outputHelp();
    process.exit(0);
}


// just a helper to run multiple commands in sequence and process global
// options before executing them.
function cmd(var_args){
    var fns = Array.prototype.slice.call(arguments);
    return function(){
        if (_cli.silent) {
            _helpers.isSilent = true;
        }
        var args = Array.prototype.slice.call(arguments);
        fns.forEach(function(fn){
            fn.apply(null, args);
        });
    };
}


// --


function buildDocs(){
    var mdoc = require('mdoc');
    mdoc.run({
        inputDir : 'doc/mdown',
        outputDir : 'doc/html',
        baseTitle : 'AMD-Utils',
        indexContentPath : 'README.md',
        templatePath : '_build/doc_template'
    });
}


function updatePackages(){
    var pkg = require('./_build/package');
    pkg.updateAllPackages();
}


function addModule(moduleName, templateName){
    var add = require('./_build/add');
    add.createSource(moduleName, templateName);
    add.createSpec(moduleName);
}


function convert(destinationPath){
    var glob = _path.join(_config.SRC_FOLDER, '/**/**.js');
    _helpers.echo('Converting modules to node.js:');
    require('nodefy').batchConvert(glob, destinationPath, function(err, results){
        results = results.map(function(r){ return r.outputPath; });
        _helpers.echoList(results);
        _helpers.echo('Finished node.js conversion');
    });
}

