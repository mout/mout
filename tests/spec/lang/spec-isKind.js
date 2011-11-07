define([
    'src/lang/isArguments',
    'src/lang/isArray',
    'src/lang/isBoolean',
    'src/lang/isDate',
    'src/lang/isFunction',
    'src/lang/isKind',
    'src/lang/isNull',
    'src/lang/isNumber',
    'src/lang/isObject',
    'src/lang/isRegExp',
    'src/lang/isString',
    'src/lang/isUndefined'
], function (
    isArguments,
    isArray,
    isBoolean,
    isDate,
    isFunction,
    isKind,
    isNull,
    isNumber,
    isObject,
    isRegExp,
    isString,
    isUndefined
) {

    describe('lang/isKind()', function(){

        it('should check kind of value', function () {

            expect( isKind('', 'String') ).toBe( true );
            expect( isString('foo') ).toBe( true );
            expect( isString(new String('lorem')) ).toBe( true );
            expect( isString(String(123)) ).toBe( true );

            expect( isNumber(0) ).toBe( true );
            expect( isNumber(123) ).toBe( true );
            expect( isNumber(new Number(123)) ).toBe( true );
            expect( isNumber(Number('123')) ).toBe( true );

            expect( isBoolean(true) ).toBe( true );
            expect( isBoolean(false) ).toBe( true );
            expect( isBoolean(new Boolean(false)) ).toBe( true );
            expect( isBoolean(new Boolean(true)) ).toBe( true );
            expect( isBoolean(Boolean(0)) ).toBe( true );
            expect( isBoolean(Boolean(1)) ).toBe( true );


            expect( isKind([1, 'foo'], 'Array') ).toBe( true );
            expect( isArray([1, 'foo']) ).toBe( true );
            expect( isArray(new Array(3)) ).toBe( true );

            expect( isKind(null, 'Null') ).toBe( true );
            expect( isNull(null) ).toBe( true );

            expect( isKind(undefined, 'Undefined') ).toBe( true );
            expect( isUndefined(undefined) ).toBe( true );
            expect( isUndefined() ).toBe( true );

            expect( isKind(function () {}, 'Function') ).toBe( true );
            expect( isFunction(function () {}) ).toBe( true );
            expect( isFunction(new Function('return 1;')) ).toBe( true );

            expect( isKind(/\w+/, 'RegExp') ).toBe( true );
            expect( isRegExp(/\w+/) ).toBe( true );
            expect( isRegExp(new RegExp('\\w+', 'g')) ).toBe( true );

            expect( isKind(new Date(), 'Date') ).toBe( true );
            expect( isDate(new Date()) ).toBe( true );

            expect( isKind(arguments, 'Arguments') ).toBe( true );
            expect( isArguments(arguments) ).toBe( true );
        });

    });
});
