define(['src/queryString/decodeQuery'], function (decodeQuery) {

    describe('queryString/decodeQuery()', function () {

        it('should decode query string and typecast values', function () {
            var q = decodeQuery('?a=123&b=false&c=null&d=bar');
            expect( q.a ).toBe( 123 );
            expect( q.b ).toBe( false );
            expect( q.c ).toBe( null );
            expect( q.d ).toBe( 'bar' );
        });

        it('should decode special chars', function () {
            var q = decodeQuery('?a=bar&b=lorem%20ipsum&c=sp%C3%A9%C3%A7%C3%AE%C3%A3l%20%C3%A7h%C3%A2rs');
            expect( q.a ).toBe( 'bar' );
            expect( q.b ).toBe( 'lorem ipsum' );
            expect( q.c ).toBe( 'spéçîãl çhârs' );
        });
    });
});
