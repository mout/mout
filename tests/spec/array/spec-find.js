define(['src/array/find'], function (find) {

    describe('array/find', function () {

        it('should return first match', function () {

            var obj = {a : 'b'},
                arr = [123, 'foo', 'bar', obj];

            expect( find(arr, function(val){ return val === 123; }) ).toEqual( 123 );
            expect( find(arr, function(val){ return typeof val === 'string'; }) ).toEqual( 'foo' );
            expect( find(arr, function(val){ return val.a === 'b'; }) ).toEqual( obj );

        });

    });

});
