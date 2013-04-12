define(['mout/date/totalDaysInYear'], function(totalDaysInYear){

    describe('date/totalDaysInYear', function(){

        it('should return total days in year', function(){
            expect( totalDaysInYear(2013) ).toBe(365);
            expect( totalDaysInYear(2004) ).toBe(366);
        });

        it('should accept date objects', function(){
            expect( totalDaysInYear( new Date(2013, 1, 2) ) ).toBe(365);
            expect( totalDaysInYear( new Date(2004, 1, 2) ) ).toBe(366);
        });

    });

});
