define(['src/string/crop'], function (crop) {

    describe('cropstring/()', function(){
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

    });
});
