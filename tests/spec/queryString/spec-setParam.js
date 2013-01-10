define(['mout/queryString/setParam'], function(setParam){

    describe('queryString/setParam', function(){

        it('should add value if it doesn\'t exist', function(){
            expect( setParam('foo.com', 'bar', true) ).toBe( 'foo.com?bar=true' );
            expect( setParam('foo.com?bar=1', 'ipsum', 'dolor') ).toBe( 'foo.com?bar=1&ipsum=dolor' );
        });

        it('should encode value', function () {
            expect( setParam('foo.com?bar=1', 'ipsum', 'dólôr amèt') ).toBe( 'foo.com?bar=1&ipsum=d%C3%B3l%C3%B4r%20am%C3%A8t' );
        });

        it('should update value if it exists', function(){
            expect( setParam('foo.com?bar=2', 'bar', false) ).toBe( 'foo.com?bar=false' );
            expect( setParam('foo.com?bar=1&ipsum=dolor%20amet&maecennas=3', 'bar', 'amet') ).toBe( 'foo.com?bar=amet&ipsum=dolor%20amet&maecennas=3' );
        });

        it('should work with just the query string', function () {
            expect( setParam('?dolor=amet', 'ipsum', 123) ).toEqual( '?dolor=amet&ipsum=123' );
            expect( setParam('?dolor=amet&ipsum=5', 'ipsum', 123) ).toEqual( '?dolor=amet&ipsum=123' );
            expect( setParam('?dolor=amet&ipsum=5&maecennas=ullamcor', 'ipsum', 123) ).toEqual( '?dolor=amet&ipsum=123&maecennas=ullamcor' );
        });

        it('should work with empty url', function () {
            expect( setParam('', 'foo', 'bar') ).toEqual( '?foo=bar' );
            expect( setParam('?', 'foo', 'bar') ).toEqual( '?foo=bar' );
        });

    });

});
