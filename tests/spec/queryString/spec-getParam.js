define(['src/queryString/getParam'], function (getParam) {

    describe('queryString/getParam()', function () {

        it('should parse full URL or query string and get parameter value', function () {
            var query = "?foo=bar&a=123&b=false&c=null";
            var url = "http://example.com/?foo=bar&a=123&b=false&c=null";

            expect( getParam('foo', query) ).toEqual( 'bar' );
            expect( getParam('foo', query) ).toEqual( getParam('foo', url) );
            expect( getParam('a', query) ).toEqual( 123 );
            expect( getParam('a', query) ).toEqual( getParam('a', url) );
            expect( getParam('b', query) ).toEqual( false );
            expect( getParam('b', query) ).toEqual( getParam('b', url) );
        });
    });

});
