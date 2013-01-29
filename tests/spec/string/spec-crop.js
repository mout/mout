define(['mout/string/crop'], function (crop) {

    describe('string/crop()', function(){
        var str = 'lorem ipsum dolor sit amet';

        it('should limit number of chars', function(){
            var r1 = crop(str, 10);
            expect( r1.length ).toBeLessThan( 11 );
            expect( r1 ).toEqual( 'lorem...' );

            var r2 = crop(str, 14);
            expect( r2.length ).toBeLessThan( 15 );
            expect( r2 ).toEqual( 'lorem ipsum...' );
        });

        it('should append string param', function(){
            var r1 = crop(str, 10, '--');
            expect( r1.length ).toBeLessThan( 11 );
            expect( r1 ).toEqual( 'lorem--' );

            var r2 = crop(str, 14, '=');
            expect( r2.length ).toBeLessThan( 15 );
            expect( r2 ).toEqual( 'lorem ipsum=' );
        });

        it('should treat null as empty string', function(){
            expect( crop(null, 1) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( crop(void 0, 1) ).toBe('');
        });

    });
});
