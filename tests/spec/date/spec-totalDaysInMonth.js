define(['mout/date/totalDaysInMonth'], function(totalDaysInMonth){

    describe('date/totalDaysInMonth', function(){

        it('should return number of days in the month', function () {
            expect( totalDaysInMonth(2013, 0) ).toEqual( 31 );
            expect( totalDaysInMonth(2013, 1) ).toEqual( 28 );
            expect( totalDaysInMonth(2013, 2) ).toEqual( 31 );
            expect( totalDaysInMonth(2013, 3) ).toEqual( 30 );
            expect( totalDaysInMonth(2013, 4) ).toEqual( 31 );
            expect( totalDaysInMonth(2013, 5) ).toEqual( 30 );
            expect( totalDaysInMonth(2013, 6) ).toEqual( 31 );
            expect( totalDaysInMonth(2013, 7) ).toEqual( 31 );
            expect( totalDaysInMonth(2013, 8) ).toEqual( 30 );
            expect( totalDaysInMonth(2013, 9) ).toEqual( 31 );
            expect( totalDaysInMonth(2013, 10) ).toEqual( 30 );
            expect( totalDaysInMonth(2013, 11) ).toEqual( 31 );
        });

        it('should work with leap years', function () {
            expect( totalDaysInMonth(2000, 1) ).toEqual( 29 );
            // gregorian calendar skips 3 leap years each 400 years
            expect( totalDaysInMonth(2100, 1) ).toEqual( 28 );
            expect( totalDaysInMonth(2200, 1) ).toEqual( 28 );
            expect( totalDaysInMonth(2300, 1) ).toEqual( 28 );

            expect( totalDaysInMonth(2008, 1) ).toEqual( 29 );
            expect( totalDaysInMonth(2009, 1) ).toEqual( 28 );
            expect( totalDaysInMonth(2010, 1) ).toEqual( 28 );
            expect( totalDaysInMonth(2011, 1) ).toEqual( 28 );
            expect( totalDaysInMonth(2012, 1) ).toEqual( 29 );
            expect( totalDaysInMonth(2013, 1) ).toEqual( 28 );
        });

        it('should work with Date objects', function () {
            expect( totalDaysInMonth(new Date(2000, 1, 23)) ).toEqual( 29 );
            expect( totalDaysInMonth(new Date(2200, 1, 23)) ).toEqual( 28 );
        });

    });

});
