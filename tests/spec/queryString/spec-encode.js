define(['mout/queryString/encode'], function (encode) {

    describe('queryString/encode()', function () {

        it('should convert simple object into query string.', function () {
            var q = {
                a : 123,
                b : false,
                c : null,
                d : 'bar'
            };
            expect( encode(q) ).toBe( '?a=123&b=false&c=null&d=bar' );
        });

        it('should encode special chars', function () {
            var q = {
                a : 'bar',
                b : 'lorem ipsum',
                c : 'spéçîãl çhârs'
            };
            expect( encode(q) ).toBe( '?a=bar&b=lorem%20ipsum&c=sp%C3%A9%C3%A7%C3%AE%C3%A3l%20%C3%A7h%C3%A2rs' );
        });

        it('should run through Array values.', function () {
            var q = {
                a : "foo",
                b : [0,false,null,undefined,'spéçîãl çhârs'],
                c : [],
                e : ['', '', "foo"],
                'blob-name' : ['loren', 'ipsun']
            };
            expect( encode(q) ).toBe( '?a=foo&b=0&b=false&b=null&b=undefined&b=sp%C3%A9%C3%A7%C3%AE%C3%A3l%20%C3%A7h%C3%A2rs&c=&e=&e=&e=foo&blob-name=loren&blob-name=ipsun' );
        });

    });

});
