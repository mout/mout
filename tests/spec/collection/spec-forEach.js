define(['src/collection/forEach'], function(forEach){

    describe('collection/forEach', function(){

        it('should loop arrays', function(){
            var result = [];
            forEach([1,2,3,4], function(val, i){
                result[i] = val;
            });
            expect( result ).toEqual( [1,2,3,4] );
        });

        it('should loop over objects', function(){
            var result = {};
            forEach({a:'lorem', b:123, c:'bar'}, function(val, i){
                result[i] = val;
            });
            expect( result ).toEqual( {a:'lorem', b:123, c:'bar'} );
        });

    });

});
