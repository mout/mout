define(['mout/array/reverse', 'mout/random/rand'], function(reverse, rand){

    describe('array/reverse', function(){

        it('returns a copy of the array', function(){

            var a = [1, 2, 3];
            var b = reverse(a);

            expect( a === b ).toBe(false);
        });

        it('reverses the order of the array', function() {
            var a = [1, 2, 3];
            var b = reverse(a);

            expect( b[2] ).toBe( a[0] );
            expect( b[1] ).toBe( a[1] );
            expect( b[0] ).toBe( a[2] );
        });

        it('accepts arrays of arbitray size', function() {
            var length = Math.floor( rand(10, 100) );
            var a = [];

            for ( var i = 0; i < length; i++ ) {
                a.push( rand(0, 100000) );
            }

            var b = reverse(a);

            for ( i = 0; i < length; i++ ) {
                expect( a[i] ).toBe( b[length - 1 - i] );
            }
        });

        it('leaves the order of the original array in tact', function() {
            var a = [1, 2, 3, 4, 5];

            reverse(a);

            for( var i = 0; i < a.length; i++ ) {
                expect( a[i] ).toBe( i + 1 );
            }

            expect( a.length ).toBe( 5 );
        });

    });

});
