define(['mout/string/repeat'], function (repeat) {

    describe('string/repeat()', function () {

        it('should repeat string n times', function () {

            expect( repeat('a', 3) ).toEqual( 'aaa' );
            expect( repeat('ab', 3) ).toEqual( 'ababab' );
            expect( repeat('a', 1) ).toEqual( 'a' );
            expect( repeat('a', 0) ).toEqual( '' );

        });

        it('should treat null as empty string', function(){
            expect( repeat(null, 1) ).toEqual('');
        });

        it('should tread undefined as empty string', function(){
            expect( repeat(void 0, 1) ).toEqual('');
        });
        it('should treat "ab" as not a number', function(){
            expect( repeat('a','ab') ).toEqual('');
        });
    });

});
