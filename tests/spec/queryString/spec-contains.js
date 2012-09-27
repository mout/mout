define(['src/queryString/contains'], function (contains) {

    describe('queryString/contains()', function () {

        it('should check if param exists', function () {
            var query = "?foo=bar&a=123&b=false&c=null";
            var url = "http://example.com/?foo=bar&a=123&b=false&c=null";

            expect( contains(query , 'foo') ) .toEqual( true );
            expect( contains(url   , 'foo') ) .toEqual( true );
            expect( contains(query , 'a'  ) ) .toEqual( true );
            expect( contains(url   , 'a'  ) ) .toEqual( true );
            expect( contains(query , 'b'  ) ) .toEqual( true );
            expect( contains(url   , 'b'  ) ) .toEqual( true );
            expect( contains(query , 'c'  ) ) .toEqual( true );
            expect( contains(url   , 'c'  ) ) .toEqual( true );

            expect( contains(query , 'd'  ) ) .toEqual( false );
            expect( contains(url   , 'd'  ) ) .toEqual( false );
        });
    });

});
