define(['src/queryString/getQueryString'], function (getQueryString) {

    describe('queryString/getQueryString()', function () {

        it('should extract query string from url', function () {
            var q = getQueryString("http://example.com/?foo=bar&a=123&b=false&c=null");
            expect( q ).toBe( '?foo=bar&a=123&b=false&c=null' );
        });
    });

});
