define(['src/array/filter'], function (filter) {

    describe('array/filter()', function(){

        it('should filter items', function(){
            var items = [1,2,3,4,5];
            var result = filter(items, function(val, i, arr){
                return (val % 2) !== 0;
            });

            expect( result.length ).toEqual( 3 );
            expect( items.length ).toEqual( 5 ); //make sure it doesn't replace original array

            expect( result[0] ).toEqual( 1 );
            expect( result[1] ).toEqual( 3 );
            expect( result[2] ).toEqual( 5 );
        });

    });

});
