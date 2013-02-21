define(['mout/collection/find'], function(find){

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


        it('should support shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:1},
                '1' : {foo:'bar', lorem:'ipsum', id:2},
                '2' : {foo:'bar', lorem:'ipsum', id:4}
            };
            var arr = [obj[0], obj[1], obj[2]];

            expect( find(obj, {lorem:'ipsum', id:1}) ).toEqual( obj[0] );
            expect( find(obj, {amet:123}) ).toBeUndefined();

            expect( find(arr, {lorem:'ipsum', id:1}) ).toEqual( obj[0] );
            expect( find(arr, {amet:123}) ).toBeUndefined();
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:0},
                '1' : {foo:'bar', lorem:'ipsum', id:1}
            };
            var arr = [obj[0], obj[1]];

            expect( find(obj, 'id') ).toEqual( obj[1] );
            expect( find(obj, 'amet') ).toBeUndefined();

            expect( find(arr, 'id') ).toEqual( obj[1] );
            expect( find(arr, 'amet') ).toBeUndefined();
        });


    });
});
