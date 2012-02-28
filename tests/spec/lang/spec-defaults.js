define(['src/lang/defaults'], function (defaults) {

    describe('lang/defaults', function () {

        it('should return first non void value', function () {

            var a,
                b = null;

            expect( defaults(a, 'foo') ).toEqual( 'foo' );
            expect( defaults(b, 'bar') ).toEqual( 'bar' );
            expect( defaults(a, b, 123) ).toEqual( 123 );
            expect( defaults(a, b, 123, 'dolor') ).toEqual( 123 );
            expect( defaults(a, false, b, 123, 'dolor') ).toEqual( false );
            expect( defaults(a, true, b, 123, 'dolor') ).toEqual( true );

            var obj = {};
            expect( defaults(obj, a, b, 123, 'dolor') ).toEqual( obj );
            expect( defaults(a, b, obj, 123, 'dolor') ).toEqual( obj );

        });

    });

});
