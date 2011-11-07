define(['src/string/truncate'], function (truncate) {

    describe('string/truncate()', function(){
        var str = 'lorem ipsum dolor sit amet';

        it('should limit number of chars', function(){
            var r1 = truncate(str, 10);
            expect( r1.length ).toBeLessThan( 11 );
            expect( r1 ).toEqual( 'lorem i...' );

            var r2 = truncate(str, 14);
            expect( r2.length ).toBeLessThan( 15 );
            expect( r2 ).toEqual( 'lorem ipsum...' );
        });

        it('should append string param', function(){
            var r1 = truncate(str, 10, '--');
            expect( r1.length ).toBeLessThan( 11 );
            expect( r1 ).toEqual( 'lorem ip--' );
        });

        it('last char before append shouldn\'t be a whitespace', function(){
            var r1 = truncate(str, 12, '=');
            var r2 = truncate(str, 13, '=');

            expect( r2.length ).toBeLessThan( 14 );
            expect( r2 ).toEqual( 'lorem ipsum=' );
            expect( r1 ).toEqual( r2 );
        });

        it('should allow cropping at full words', function(){
            var r1 = truncate(str, 10, null, true);
            expect( r1.length ).toBeLessThan( 11 );
            expect( r1 ).toEqual( 'lorem...' );

            var r2 = truncate(str, 14, null, true);
            expect( r2.length ).toBeLessThan( 15 );
            expect( r2 ).toEqual( 'lorem ipsum...' );
        });

    });
});
