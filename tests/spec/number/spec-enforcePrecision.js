define(['src/number/enforcePrecision'], function (enforcePrecision) {

    describe('number/enforcePrecision()', function(){

        it('should remove unnecessary precision', function(){
            var n = 3.12 * 0.01; //0.031200000000000002 because of floating point precision error (http://en.wikipedia.org/wiki/Floating_point#Accuracy_problems)
            expect( n ).not.toEqual( 0.0312 ); //because of floating point error
            expect( enforcePrecision(n, 4) ).toEqual( 0.0312 ); //"fix" floating point precision error
            expect( enforcePrecision(n, 2) ).toEqual( 0.03 );
            expect( enforcePrecision(n, 0) ).toEqual( 0 );

            //string comparison to make sure it is triming number
            expect( n + '' ).not.toEqual( '0.0312' );
            expect( enforcePrecision(n, 4) + '' ).toEqual( '0.0312' );
            expect( enforcePrecision(n, 2) + ''  ).toEqual( '0.03' );
            expect( enforcePrecision(n, 0) + ''  ).toEqual( '0' );
        });

        it('should fix rounding issues', function(){
            var n = 0.615;
            expect( enforcePrecision(n, 4) ).toEqual( 0.6150 );
            expect( enforcePrecision(n, 3) ).toEqual( 0.615 );
            expect( enforcePrecision(n, 2) ).toEqual( 0.62 ); //(0.615).toFixed(2) == "0.61" which is wrong!
            expect( enforcePrecision(n, 0) ).toEqual( 1 );
        });

    });
});
