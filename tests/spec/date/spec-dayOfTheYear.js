define(['mout/date/dayOfTheYear'], function(dayOfTheYear){

    describe('date/dayOfTheYear', function(){

        it('should return day of the year', function(){
            expect( dayOfTheYear(new Date(2013, 0, 1)) ).toBe( 1 );
            expect( dayOfTheYear(new Date(2013, 0, 12)) ).toBe( 12 );
            expect( dayOfTheYear(new Date(2013, 2, 12)) ).toBe( 71 );
            expect( dayOfTheYear(new Date(2013, 11, 31)) ).toBe( 365 );
        });

    });

});
