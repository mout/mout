/*jshint node:true */
"use strict";

// rename module and update specs


// ---

var _fs = require('fs'),
    _path = require('path'),
    _helpers = require('./helpers'),
    _package = require('./package'),
    _rocambole = require('rocambole');

var echo = _helpers.echo;

// --


exports.renameModule = function(oldName, newName){
    var srcIn = _helpers.srcPath(oldName) +'.js';
    var srcOut = _helpers.srcPath(newName) +'.js';

    if (! _fs.existsSync(srcIn) ) {
        console.error('can\'t rename file "'+ srcIn +'", file doesn\'t exist.');
        process.exit(1);
    } else if ( _fs.statSync(srcIn).isDirectory() ) {
        console.error('can\'t rename packages, only modules');
        process.exit(1);
    }

    var specIn = toSpecPath(oldName);
    var specOut = toSpecPath(newName);

    exports.mv( srcIn, srcOut );
    exports.mv( specIn, specOut );

    updateSpec(specOut, oldName, newName);
    updateSource(srcOut, oldName, newName);

    echo('renamed: "'+ oldName +'" to "'+ newName +'"');

    var packageIn = oldName.split('/')[0];
    var packageOut = newName.split('/')[0];
    _package.updatePackage(packageIn);
    _package.updateSpecGroup(packageIn);
    if (packageIn !== packageOut) {
        _package.updatePackage(packageOut);
        _package.updateSpecGroup(packageOut);
    }
};



exports.mv = function(oldPath, newPath){
    if ( _fs.existsSync(oldPath) ) {
        if ( _fs.existsSync(newPath) ) {
            console.error('file "'+ newPath +'" already exists and can\'t be overwritten.');
            process.exit(1);
        } else {
            _fs.renameSync(oldPath, newPath);
        }
    } else {
        console.error('file "'+ oldPath +'" doesn\'t exist.');
        process.exit(1);
    }
};


// --


function toSpecPath(name){
    return _helpers.specPath( name.replace(/\/([\w\.\-\_]+)$/, '/spec-$1.js') );
}


function updateSource(path, oldName, newName){
    var src = _fs.readFileSync(path).toString();
    var ast = _rocambole.parse(src);

    var oldFn = oldName.split('/').pop();
    var newFn = newName.split('/').pop();

    _rocambole.recursive(ast, function(node){
        if (node.type === 'FunctionDeclaration' && node.id.name === oldFn) {
            node.id.startToken.value = newFn;
        } else if (node.type === 'ReturnStatement' && node.argument.name === oldFn) {
            node.argument.startToken.value = newFn;
        } else if (node.type === 'CallExpression' && node.callee.name === oldFn) {
            node.callee.startToken.value = newFn;
        }
    });

    _fs.writeFileSync(path, ast.toString(), 'utf-8');
}


function updateSpec(path, oldName, newName) {
    var src = _fs.readFileSync(path).toString();
    var ast = _rocambole.parse(src);

    var re = new RegExp('([\'"].*)'+ oldName +'([\'"])');
    var oldFn = oldName.split('/').pop();
    var newFn = newName.split('/').pop();


    _rocambole.recursive(ast, function(node){
        if(node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.callee.type === 'Identifier') {

            // update define
            if (node.expression.callee.name === 'define') {
                node.expression['arguments'].forEach(function(arg){
                    if (arg.type === 'ArrayExpression') {
                        arg.elements.forEach(function(el){
                            if (el.startToken.type === 'String' && re.test(el.startToken.value)) {
                                el.startToken.value = el.startToken.value.replace(re, '$1'+ newName +'$2');
                            }
                        });
                    } else if (arg.type === 'FunctionExpression') {
                        arg.params.forEach(function(param){
                            if (param.name === oldFn) {
                                param.startToken.value = newFn;
                            }
                        });
                    }
                });
            }

            // update describe
            if (node.expression.callee.name === 'describe') {
                var arg = node.expression['arguments'][0];
                if (arg.startToken.type === 'String' && re.test(arg.startToken.value)) {
                    arg.startToken.value = arg.startToken.value.replace(re, '$1'+ newName +'$2');
                }
            }

        } else if (node.type === 'CallExpression' && node.callee.name === oldFn) {
            // update calls
            node.callee.startToken.value = newFn;
        }

    });

    _fs.writeFileSync(path, ast.toString(), 'utf-8');

}
