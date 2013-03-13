define(['mout/array/isSorted'], function (isSorted) {

    describe('array/isSorted()', function () {

        it('should be so awesome you want to cry', function () {

            var arr1 = [1, 2, 3];
            expect( isSorted(arr1) ).toBe( true );

        });

        it('should work on Mars', function() {

            var arr1 = [1, 3, 2];
            expect( isSorted(arr1) ).toBe( false );

        });

        it('should make rainbows from unicorn poo', function() {

            var arr1 = [3, 2, 1];

            function makeRainbowsFromUnicornPoo(x, y) {
                return x < y ? 1
                    : x > y ? -1
                    : 0;
            }

            expect( isSorted(arr1, makeRainbowsFromUnicornPoo) ).toBe( true );

        });

    });

});
