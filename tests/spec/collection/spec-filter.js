define(['mout/collection/filter'], function(filter){

    describe('collection/filter', function(){

        // no need to test full behavior since it reuses the array/object methods
        it('should filter array', function(){
            expect( filter([1,2,3,4,5], function(val){
                return val % 2 === 0;
            }) ).toEqual( [2, 4] );
        });

        it('should filter object', function(){
            expect( filter({a: 123, b : 'bar'}, function(val){
                return typeof val === 'string';
            }) ).toEqual( {b: 'bar'} );
        });

        it('should return undefined if target is undefined or null', function () {
            var result = filter(null, function(val){
                return true;
            });
            expect( result ).toEqual( undefined );
        });

        it('should return array if target is array-like', function () {
            var result = filter({
                '0' : 'a',
                '1' : 'b',
                '2' : 'c',
                length : 3
            }, function(val, i){
                return i !== 1;
            });
            expect( result ).toEqual( ['a', 'c'] );
        });

        it('should support shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:4}
            };
            var arr = [obj.a, obj.b, obj.c];

            expect( filter(obj, {foo:'bar', lorem:'ipsum'}) ).toEqual( obj );
            expect( filter(obj, {lorem:'ipsum', id:1}) ).toEqual( {a: obj.a} );
            expect( filter(obj, {amet:123}) ).toEqual( {} );

            expect( filter(arr, {foo:'bar', lorem:'ipsum'}) ).toEqual( [obj.a, obj.b, obj.c] );
            expect( filter(arr, {lorem:'ipsum', id:1}) ).toEqual( [obj.a] );
            expect( filter(arr, {amet:123}) ).toEqual( [] );
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:0}
            };
            var arr = [obj.a, obj.b, obj.c];

            expect( filter(obj, 'foo') ).toEqual( obj );
            expect( filter(obj, 'id') ).toEqual( {a: obj.a, b: obj.b} );
            expect( filter(obj, 'amet') ).toEqual( {} );

            expect( filter(arr, 'foo') ).toEqual( [obj.a, obj.b, obj.c] );
            expect( filter(arr, 'id') ).toEqual( [obj.a, obj.b] );
            expect( filter(arr, 'amet') ).toEqual( [] );
        });


    });
});
