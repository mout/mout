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
            expect( result ).toEqual( {a:2,b:4,c:6} );
        });

    });

});
