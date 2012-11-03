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

        it('should return empty array if target is null', function () {
            var result = filter(null, function(val){
                return true;
            });
            expect( result ).toEqual( [] );
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

    });

});
