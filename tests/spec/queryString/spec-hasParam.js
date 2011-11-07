define(['src/queryString/hasParam'], function (hasParam) {

    describe('queryString/hasParam()', function () {

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

});
