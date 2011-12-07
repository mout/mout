define(['src/string/repeat'], function (repeat) {

    describe('string/repeat()', function () {

        it('should repeat string n times', function () {

            expect( repeat('a', 3) ).toEqual( 'aaa' );
            expect( repeat('ab', 3) ).toEqual( 'ababab' );
            expect( repeat('a', 1) ).toEqual( 'a' );
            expect( repeat('a', 0) ).toEqual( '' );

        });

    });

});
