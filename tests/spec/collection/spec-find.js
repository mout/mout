define(['amd-utils/collection/find'], function(find){

    describe('collection/find', function(){

        it('should return first match for array', function () {

            var obj = {a : 'b'},
                arr = [123, 'foo', 'bar', obj];

            expect( find(arr, function(val){ return val === 123; }) ).toEqual( 123 );
            expect( find(arr, function(val){ return typeof val === 'string'; }) ).toEqual( 'foo' );
            expect( find(arr, function(val){ return val.a === 'b'; }) ).toEqual( obj );

        });

        it('should return first match for object', function () {

            var inner = {
                first: 1,
                second: 2
            };

            var obj = {
                a: 123,
                b: 'foo',
                c: 'bar',
                d: inner
            };

            expect( find(obj, function(val){ return val === 123; }) ).toEqual( 123 );
            expect( find(obj, function(val){ return typeof val === 'string'; }) ).toEqual( 'foo' );
            expect( find(obj, function(val){ return val.first === 1; }) ).toEqual( inner );

        });

    });

});
