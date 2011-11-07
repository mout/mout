define(['src/queryString/getQueryObject'], function (getQueryObject) {

    describe('queryString/getQueryObject()', function () {

        it('should extract query string from url and parse it', function () {
            var q = getQueryObject("http://example.com/?foo=bar&a=123&b=false&c=null");
            expect( q.foo ).toBe( 'bar' );
            expect( q.a ).toBe( 123 );
            expect( q.b ).toBe( false );
            expect( q.c ).toBe( null );
        });
    });

});
