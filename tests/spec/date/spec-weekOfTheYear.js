define(['mout/date/weekOfTheYear'], function(weekOfTheYear){

    describe('date/weekOfTheYear', function(){

        it('should return the week of year starting from Sunday', function(){
            expect( weekOfTheYear(new Date(2013,0,1)) ).toBe( 0 );
            expect( weekOfTheYear(new Date(2013,0,6)) ).toBe( 1 );
            expect( weekOfTheYear(new Date(2013,0,9)) ).toBe( 1 );
            expect( weekOfTheYear(new Date(2013,11,9)) ).toBe( 49 );
            expect( weekOfTheYear(new Date(2013,11,31)) ).toBe( 52 );
        });

        it('should allow custom firstDayOfWeek', function(){
            expect( weekOfTheYear(new Date(2013,0,1), 1) ).toBe( 0 );
            expect( weekOfTheYear(new Date(2013,0,6), 1) ).toBe( 0 );
            expect( weekOfTheYear(new Date(2013,0,7), 1) ).toBe( 1 );
            expect( weekOfTheYear(new Date(2013,0,9), 1) ).toBe( 1 );
            expect( weekOfTheYear(new Date(2013,11,9), 1) ).toBe( 49 );
            expect( weekOfTheYear(new Date(2013,11,31), 1) ).toBe( 52 );
        });

        it('should handle years that start at Sunday', function(){
            expect( weekOfTheYear(new Date(2012,0,1)) ).toBe( 1 );
            expect( weekOfTheYear(new Date(2012,0,6)) ).toBe( 1 );
            expect( weekOfTheYear(new Date(2012,0,9)) ).toBe( 2 );
            expect( weekOfTheYear(new Date(2012,0,1), 1) ).toBe( 0 );
            expect( weekOfTheYear(new Date(2012,0,6), 1) ).toBe( 1 );
        });

    });

});
