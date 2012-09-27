define(['src/queryString/getParam'], function (getParam) {

    describe('queryString/getParam()', function () {

        it('should parse full URL or query string, get parameter value and typecast by default', function () {
            var query = "?foo=bar&a=123&b=false&c=null";
            var url = "http://example.com/?foo=bar&a=123&b=false&c=null";

            expect( getParam(query, 'foo' ) ).toEqual( 'bar' );
            expect( getParam(query, 'foo' ) ).toEqual( getParam(url, 'foo') );
            expect( getParam(query, 'a'   ) ).toEqual( 123 );
            expect( getParam(query, 'a'   ) ).toEqual( getParam(url, 'a') );
            expect( getParam(query, 'b'   ) ).toEqual( false );
            expect( getParam(query, 'b'   ) ).toEqual( getParam(url, 'b') );
        });

        it('should allow toggling the typecast', function () {
            var query = "?foo=bar&a=123&b=false&c=null";
            var url = "http://example.com/?foo=bar&a=123&b=false&c=null";

            expect( getParam(query, 'foo', true ) ).toEqual( 'bar' );
            expect( getParam(query, 'foo', false ) ).toEqual( 'bar' );
            expect( getParam(query, 'a'  , true ) ).toEqual( 123 );
            expect( getParam(query, 'a'  , false ) ).toEqual( '123' );
            expect( getParam(query, 'b'  , true ) ).toEqual( false );
            expect( getParam(query, 'b'  , false ) ).toEqual( 'false' );
        });
    });

});
