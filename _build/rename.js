/*jshint node:true */
'use strict';

// rename module and update specs

// ---

const _fs = require('fs'), _path = require('path'), _helpers = require('./helpers'), _package = require('./package'), _rocambole = require('rocambole');

const echo = _helpers.echo;

// --

exports.renameModule = function(oldName, newName) {
    const srcIn = `${_helpers.srcPath(oldName)}.js`;
    const srcOut = `${_helpers.srcPath(newName)}.js`;

    if (!_fs.existsSync(srcIn)) {
        console.error(
            `can't rename file "${srcIn}", file doesn't exist.`
        );
        process.exit(1);
    } else if (_fs.statSync(srcIn).isDirectory()) {
        console.error("can't rename packages, only modules");
        process.exit(1);
    }

    const specIn = toSpecPath(oldName);
    const specOut = toSpecPath(newName);

    exports.mv(srcIn, srcOut);
    exports.mv(specIn, specOut);

    updateSpec(specOut, oldName, newName);
    updateSource(srcOut, oldName, newName);

    echo(`renamed: "${oldName}" to "${newName}"`);

    const packageIn = oldName.split('/')[0];
    const packageOut = newName.split('/')[0];
    _package.updatePackage(packageIn);
    _package.updateSpecGroup(packageIn);
    if (packageIn !== packageOut) {
        _package.updatePackage(packageOut);
        _package.updateSpecGroup(packageOut);
    }
};

exports.mv = function(oldPath, newPath) {
    if (_fs.existsSync(oldPath)) {
        if (_fs.existsSync(newPath)) {
            console.error(
                `file "${newPath}" already exists and can't be overwritten.`
            );
            process.exit(1);
        } else {
            _fs.renameSync(oldPath, newPath);
        }
    } else {
        console.error(`file "${oldPath}" doesn't exist.`);
        process.exit(1);
    }
};

// --

function toSpecPath(name) {
    return _helpers.specPath(name.replace(/\/([\w\.\-\_]+)$/, '/spec-$1.js'));
}

function updateSource(path, oldName, newName) {
    const src = _fs.readFileSync(path).toString();
    const ast = _rocambole.parse(src);

    const oldFn = oldName.split('/').pop();
    const newFn = newName.split('/').pop();

    _rocambole.recursive(ast, function({type, id, argument, callee}) {
        if (type === 'FunctionDeclaration' && id.name === oldFn) {
            id.startToken.value = newFn;
        } else if (
            type === 'ReturnStatement' &&
            argument.name === oldFn
        ) {
            argument.startToken.value = newFn;
        } else if (
            type === 'CallExpression' &&
            callee.name === oldFn
        ) {
            callee.startToken.value = newFn;
        }
    });

    _fs.writeFileSync(path, ast.toString(), 'utf-8');
}

function updateSpec(path, oldName, newName) {
    const src = _fs.readFileSync(path).toString();
    const ast = _rocambole.parse(src);

    const re = new RegExp(`(['"].*)${oldName}(['"])`);
    const oldFn = oldName.split('/').pop();
    const newFn = newName.split('/').pop();

    _rocambole.recursive(ast, function({type, expression, callee}) {
        if (
            type === 'ExpressionStatement' &&
            expression.type === 'CallExpression' &&
            expression.callee.type === 'Identifier'
        ) {
            // update define
            if (expression.callee.name === 'define') {
                expression['arguments'].forEach(function({type, elements, params}) {
                    if (type === 'ArrayExpression') {
                        elements.forEach(function({startToken}) {
                            if (
                                startToken.type === 'String' &&
                                re.test(startToken.value)
                            ) {
                                startToken.value = startToken.value.replace(
                                    re,
                                    `$1${newName}$2`
                                );
                            }
                        });
                    } else if (type === 'FunctionExpression') {
                        params.forEach(function({name, startToken}) {
                            if (name === oldFn) {
                                startToken.value = newFn;
                            }
                        });
                    }
                });
            }

            // update describe
            if (expression.callee.name === 'describe') {
                const arg = expression['arguments'][0];
                if (
                    arg.startToken.type === 'String' &&
                    re.test(arg.startToken.value)
                ) {
                    arg.startToken.value = arg.startToken.value.replace(
                        re,
                        `$1${newName}$2`
                    );
                }
            }
        } else if (
            type === 'CallExpression' &&
            callee.name === oldFn
        ) {
            // update calls
            callee.startToken.value = newFn;
        }
    });

    _fs.writeFileSync(path, ast.toString(), 'utf-8');
}
