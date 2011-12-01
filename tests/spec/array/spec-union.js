define(['src/array/union'], function (union) {

    describe('array/union()', function () {

        it('should concat arrays', function () {

            var a = ['a', 'b'],
                b = ['c'],
                c = [1, 2, 3];

            expect( union(a, b, c) ).toEqual( ['a', 'b', 'c', 1, 2, 3] );

        });

        it('should remove duplicates', function () {

            var a = ['a', 'b'],
                b = ['c', 'a'],
                c = [1, 'b', 2, 3, 'a'];

            //note that unique remove from begin to end
            expect( union(a, b, c) ).toEqual( ['c', 1, 'b', 2, 3, 'a'] );

        });

    });

});
