define(['src/queryString/getQuery'], function (getQuery) {

    describe('queryString/getQuery()', function () {

        it('should extract query string from url', function () {
            var q = getQuery("http://example.com/?foo=bar&a=123&b=false&c=null");
            expect( q ).toBe( '?foo=bar&a=123&b=false&c=null' );
        });
    });

});
