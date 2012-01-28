define(['src/array/insert'], function (insert) {

    describe('array/insert()', function(){

        it('should push item if not present and return the length', function(){

            var arr = [1, 2, 3];

            expect( insert(arr, 3) ).toBe( 3 );
            expect( arr.length ).toBe( 3 );
            expect( arr ).toEqual( [1,2,3] );

            expect( insert(arr, 4) ).toBe( 4 );
            expect( arr.length ).toBe( 4 );
            expect( arr ).toEqual( [1,2,3,4] );
        });

        it('should accept multiple items', function () {

            var arr = ['a', 'b'];

            expect( insert(arr, 'a', 'b') ).toBe( 2 );
            expect( arr.length ).toBe( 2 );
            expect( arr ).toEqual( ['a', 'b'] );

            expect( insert(arr, 1, 2, 'b', 3, 'a', 'c') ).toBe( 6 );
            expect( arr.length ).toBe( 6 );
            expect( arr ).toEqual( ['a', 'b', 1, 2, 3, 'c'] );

        });

    });
});
