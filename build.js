
// node.js based build script
// run `node build -h` for usage information


var _cli = require('commander');

_cli
    .command('doc')
    .description('build documentation.')
    .action(buildDocs);

_cli
    .command('pkg')
    .description('update packages and specs')
    .action(updatePackages);

_cli
    .command('deploy')
    .description('build documentation and update packages.')
    .action(function(){
        buildDocs();
        updatePackages();
    });

_cli
    .command('add <moduleName>')
    .option('-c, --collection', 'Use the collection template.')
    .description('add a new module.')
    .action(addModule);

_cli.parse(process.argv);

// show help by default
if (!_cli.args.length) {
    _cli.outputHelp();
    process.exit(0);
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


function addModule(moduleName, cmd){
    var add = require('./_build/add');
    var type = cmd.collection? 'collection' : '';
    add.createSource(moduleName, type);
    add.createSpec(moduleName);
}


