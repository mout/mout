define(['mout/date/isLeapYear'], function(isLeapYear){

    describe('date/isLeapYear', function(){

        it('should check if it is a leap year', function(){
            expect( isLeapYear(2000) ).toBe( true );
            // gregorian calendar skips 3 leap years each 400 years
            expect( isLeapYear(2100) ).toBe( false );
            expect( isLeapYear(2200) ).toBe( false );
            expect( isLeapYear(2300) ).toBe( false );

            expect( isLeapYear(2008) ).toBe( true );
            expect( isLeapYear(2009) ).toBe( false );
            expect( isLeapYear(2010) ).toBe( false );
            expect( isLeapYear(2011) ).toBe( false );
            expect( isLeapYear(2012) ).toBe( true );
            expect( isLeapYear(2013) ).toBe( false );
        });

        it('should work with Date objects', function () {
            expect( isLeapYear(new Date(2000, 2, 28)) ).toBe( true );
            // gregorian calendar skips 3 leap years each 400 years
            expect( isLeapYear(new Date(2100, 2, 28)) ).toBe( false );
            expect( isLeapYear(new Date(2200, 2, 28)) ).toBe( false );
            expect( isLeapYear(new Date(2300, 2, 28)) ).toBe( false );

            expect( isLeapYear(new Date(2008, 2, 28)) ).toBe( true );
            expect( isLeapYear(new Date(2009, 2, 28)) ).toBe( false );
            expect( isLeapYear(new Date(2010, 2, 28)) ).toBe( false );
            expect( isLeapYear(new Date(2011, 2, 28)) ).toBe( false );
            expect( isLeapYear(new Date(2012, 2, 28)) ).toBe( true );
            expect( isLeapYear(new Date(2013, 2, 28)) ).toBe( false );
        });

    });

});
