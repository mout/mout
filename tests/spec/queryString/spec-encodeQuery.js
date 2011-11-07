define(['src/queryString/encodeQuery'], function (encodeQuery) {

    describe('queryString/encodeQuery()', function () {

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

});
