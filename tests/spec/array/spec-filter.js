define(['src/array/filter'], function (filter) {

    describe('array/filter()', function(){

        it('should filter items', function(){
            var items = [1,2,3,4,5];
            var result = filter(items, function(val, i, arr){
                return (val % 2) !== 0;
            });

            expect( items.length ).toEqual( 5 ); //make sure it doesn't replace original array
            expect( result ).toEqual( [1, 3, 5] );
        });

        it('should support sparse arrays', function () {
            var items = new Array(6);
            items[2] = 3;
            items[5] = 8;

            var result = filter(items, function(val, i, arr){
                expect( arr ).toBe( items );
                expect( val ).toBe( items[i] );
                expect( i ).not.toBe( 4 ); // make sure it skips sparse items
                return val % 2 === 0;
            });

            expect( result ).toEqual( [8] );

        });

        it('should return empty array if no items match', function () {
            var items = [1,2,3,4,5];
            var result = filter(items, function(val, i, arr){
                return false;
            });

            expect( result ).toEqual( [] );
        });

    });

});
