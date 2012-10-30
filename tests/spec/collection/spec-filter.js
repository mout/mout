define(['src/collection/filter'], function(filter){

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

    });

});
