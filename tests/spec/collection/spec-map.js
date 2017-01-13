define(['mout/collection/map'], function(map){

    describe('collection/map', function(){

        it('should map array', function(){
            var result = map([1,2,3], function(val){
                return val * 2;
            });
            expect( result ).toEqual( [2,4,6] );
        });

        it('should map object', function(){
            var result = map({a:1, b:2, c:3}, function(val){
                return val * 2;
            });
            expect( result ).toEqual( {a: 2, b: 4, c:6} );
        });

        it('should return undefined if target is undefined or null', function () {
            var result = map(null, function(val){
                return val * 2;
            });
            expect( result ).toEqual( undefined );
        });

        it('should loop over array-like object as if it was an array', function () {
            var obj = {
                '0' : '1',
                '1' : 'b',
                '2' : 'c',
                length : 3
            };
            var result = map(obj, function(val, i){
                return i +'-'+ val;
            });
            expect( result ).toEqual( ['0-1', '1-b', '2-c'] );
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:0}
            };
            var arr = [obj.a, obj.b, obj.c];

            expect( map(obj, 'foo') ).toEqual( {a: 'bar', b: 'bar', c: 'bar'} );
            expect( map(obj, 'id') ).toEqual( {a: 1, b: 2, c: 0} );
            expect( map(obj, 'amet') ).toEqual( {a: undefined, b: undefined, c: undefined} );

            expect( map(arr, 'foo') ).toEqual( ['bar', 'bar', 'bar'] );
            expect( map(arr, 'id') ).toEqual( [1,2,0] );
            expect( map(arr, 'amet') ).toEqual( [undefined,undefined,undefined] );
        });


    });
});
