define(['src/collection/map'], function(map){

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
            expect( result ).toEqual( [2,4,6] );
        });

        it('should return empty array if target is undefined', function () {
            var result = map(null, function(val){
                return val * 2;
            });
            expect( result ).toEqual( [] );
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

    });

});
