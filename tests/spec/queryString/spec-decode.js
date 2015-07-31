define(['mout/queryString/decode'], function (decode) {

    describe('queryString/decode()', function () {

        it('should decode query string and typecast values', function () {
            var q = decode('?a=123&b=false&c=null&d=bar');
            expect( q.a ).toBe( 123 );
            expect( q.b ).toBe( false );
            expect( q.c ).toBe( null );
            expect( q.d ).toBe( 'bar' );
        });

        it('should decode special chars', function () {
            var q = decode('?a=bar&b=lorem%20ipsum&c=sp%C3%A9%C3%A7%C3%AE%C3%A3l%20%C3%A7h%C3%A2rs');
            expect( q.a ).toBe( 'bar' );
            expect( q.b ).toBe( 'lorem ipsum' );
            expect( q.c ).toBe( 'spéçîãl çhârs' );
        });

        it('should allow bypassing the typecast', function () {
            var q = decode('?a=123&b=false&c=null&d=bar', false);
            expect( q.a ).toBe( '123' );
            expect( q.b ).toBe( 'false' );
            expect( q.c ).toBe( 'null' );
            expect( q.d ).toBe( 'bar' );
        });

        it('should allow properties with same name and create an array', function () {
            var q = decode('?a=undefined&a=false&a=0&a=null&a=bar&b=123&b=foo&c=loren&d=&d=&d=sp%C3%A9%C3%A7%C3%AE%C3%A3l%20%C3%A7h%C3%A2rs');
            expect( q.a ).toEqual( [undefined, false, 0, null, 'bar'] );
            expect( q.b ).toEqual( [123, 'foo'] );
            expect( q.c ).toEqual( 'loren' );
            expect( q.d ).toEqual( ['', '', 'spéçîãl çhârs'] );
        });

        it('should allow equal signs inside property values', function() {
            var q = decode('?lorem=ipsum=dolor==Xds&sit=amet');
            expect( q.lorem ).toEqual( 'ipsum=dolor==Xds' );
            expect( q.sit ).toEqual( 'amet' );
        });

    });
});
