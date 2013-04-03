define(['mout/array/find'], function (find) {

    describe('array/find', function () {

        it('should return first match', function () {

            var obj = {a : 'b'},
                arr = [123, 'foo', 'bar', obj];

            expect( find(arr, function(val){ return val === 123; }) ).toEqual( 123 );
            expect( find(arr, function(val){ return typeof val === 'string'; }) ).toEqual( 'foo' );
            expect( find(arr, function(val){ return val.a === 'b'; }) ).toEqual( obj );

        });

        it('should return undefined if array is null/undefined', function () {
            var testFunc = function() { return true; };

            expect( find(null, testFunc) ).toBeUndefined();
            expect( find(undefined, testFunc) ).toBeUndefined();
        });

        it('should support object shortcut syntax', function () {
            var obj = {a : 'b'},
                arr = [123, 'foo', 'bar', obj];

            expect( find(arr, {a:'b'}) ).toEqual( obj );
        });

        it('should support string shortcut syntax', function () {
            var obj = {a : 'b'},
                arr = [123, 'foo', 'bar', obj];
            expect( find(arr, 'a') ).toEqual( obj );
        });

    });

});
