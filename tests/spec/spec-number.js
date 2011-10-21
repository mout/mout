define(['src/number'], function(numberUtils){

    describe('number', function(){

        //======

        describe('toInt()', function(){

            var toInt = numberUtils.toInt;

            it('should remove decimal digits', function(){
                expect( toInt(1.25) ).toEqual(1);
                expect( toInt(0.75) ).toEqual(0);
                expect( toInt(-0.55) ).toEqual(0);
                expect( toInt(2.999) ).toEqual(2);
                expect( toInt(10.0001) ).toEqual(10);
                expect( toInt(-5.0001) ).toEqual(-5);
                expect( toInt(-9.99999) ).toEqual(-9);
            });
        });

        describe('toUInt()', function(){

            var toUInt = numberUtils.toUInt;

            it('should remove decimal digits and limit to positive numbers', function(){
                expect( toUInt(1.25) ).toEqual(1);
                expect( toUInt(0.75) ).toEqual(0);
                expect( toUInt(-0.55) ).toEqual(0);
                expect( toUInt(2.999) ).toEqual(2);
                expect( toUInt(10.0001) ).toEqual(10);
                expect( toUInt(-5.0001) ).toEqual(0);
                expect( toUInt(-9.99999) ).toEqual(0);
            });
        });


        describe('enforcePrecision()', function(){

            var enforcePrecision = numberUtils.enforcePrecision;

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


        describe('MIN_INT', function(){
            it('should be equal -2 ^ 31', function(){
                expect( numberUtils.MIN_INT ).toEqual( Math.pow(-2, 31) );
            });
        });

        describe('MAX_INT', function(){
            it('should be equal (2 ^ 31) - 1', function(){
                expect( numberUtils.MAX_INT ).toEqual( Math.pow(2, 31) - 1 );
            });
        });

        describe('rol()', function(){
            it('should rotate bits left', function(){
                expect( numberUtils.rol( parseInt('10101', 2), 5).toString(2) ).toEqual( '1010100000' );
                expect( numberUtils.rol( 1 << 30, 5).toString(2) ).toEqual( '1000' );
            });
        });

        describe('ror()', function(){
            it('should rotate bits right', function(){
                expect( numberUtils.ror( parseInt('10101', 2), 6).toString(2) ).toEqual( '10101'+ (new Array(27)).join(0) );
                expect( numberUtils.ror( 1 << 30, 5).toString(2) ).toEqual( '1'+ (new Array(26)).join('0') );
            });
        });

        //=======
    });
});
