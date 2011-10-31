define(['src/queryString'], function (queryUtils) {

    describe('queryString', function () {

    //------

        describe('decodeQuery()', function () {

            var decodeQuery = queryUtils.decodeQuery;

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


        describe('encodeQuery()', function () {

            var encodeQuery = queryUtils.encodeQuery;

            it('should convert simple object into query string.', function () {
                var q = {
                    a : 123,
                    b : false,
                    c : null,
                    d : 'bar'
                };
                expect( encodeQuery(q) ).toBe( '?a=123&b=false&c=null&d=bar' );
            });

            it('should encode special chars', function () {
                var q = {
                    a : 'bar',
                    b : 'lorem ipsum',
                    c : 'spéçîãl çhârs'
                };
                expect( encodeQuery(q) ).toBe( '?a=bar&b=lorem%20ipsum&c=sp%C3%A9%C3%A7%C3%AE%C3%A3l%20%C3%A7h%C3%A2rs' );
            });
        });


        describe('getParam()', function () {
            var getParam = queryUtils.getParam;

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


        describe('getQueryObject()', function () {
            var getQueryObject = queryUtils.getQueryObject;

            it('should extract query string from url and parse it', function () {
                var q = getQueryObject("http://example.com/?foo=bar&a=123&b=false&c=null");
                expect( q.foo ).toBe( 'bar' );
                expect( q.a ).toBe( 123 );
                expect( q.b ).toBe( false );
                expect( q.c ).toBe( null );
            });
        });

        describe('getQueryString()', function () {
            var getQueryString = queryUtils.getQueryString;

            it('should extract query string from url', function () {
                var q = getQueryString("http://example.com/?foo=bar&a=123&b=false&c=null");
                expect( q ).toBe( '?foo=bar&a=123&b=false&c=null' );
            });
        });

        describe('hasParam()', function () {
            var hasParam = queryUtils.hasParam;

            it('should check if param exists', function () {
                var query = "?foo=bar&a=123&b=false&c=null";
                var url = "http://example.com/?foo=bar&a=123&b=false&c=null";

                expect( hasParam('foo', query) ).toEqual( true );
                expect( hasParam('foo', url) ).toEqual(true );
                expect( hasParam('a', query) ).toEqual( true );
                expect( hasParam('a', url) ).toEqual( true );
                expect( hasParam('b', query) ).toEqual( true );
                expect( hasParam('b', url) ).toEqual( true );
                expect( hasParam('c', query) ).toEqual( true );
                expect( hasParam('c', url) ).toEqual( true );

                expect( hasParam('d', query) ).toEqual( false );
                expect( hasParam('d', url) ).toEqual( false );
            });
        });


    //------
    });

});
