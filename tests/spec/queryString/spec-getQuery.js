define(['mout/queryString/getQuery'], function (getQuery) {

    describe('queryString/getQuery()', function () {

        it('should extract query string from url', function () {
            var q = getQuery("http://example.com/?foo=bar&a=123&b=false&c=null");
            expect( q ).toBe( '?foo=bar&a=123&b=false&c=null' );
        });

        it('should replace "+" with space', function () {
            var q = getQuery("http://example.com/?q=hello+world&a=123++456&b=false&c=null");
            expect( q ).toBe( '?q=hello world&a=123  456&b=false&c=null' );
        });
    });

});
