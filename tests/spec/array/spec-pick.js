define(['src/array/pick'], function (pick) {

    describe('array/pick()', function () {

        it('should remove a random item from the array and return it', function () {
            var arr = [1, 2, 3, 4, 5, 6],
                copy = arr.concat();

            var a = pick(arr);

            expect( copy ).toContain( a );
            expect( arr ).not.toContain( a );
            expect( arr.length ).toBe( copy.length - 1 );
        });

        it('should return undefined if empty array', function () {
            var arr = [],
                copy = arr.concat();

            var a = pick(arr);

            expect( a ).toBeUndefined();
            expect( arr ).not.toContain( a );
            expect( arr.length ).toBe( 0 );
        });

    });


});
