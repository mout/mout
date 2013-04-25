define(['mout/date/startOf'], function(startOf){

    describe('date/startOf', function(){

        var baseDate;

        this.beforeEach(function(){
            baseDate = new Date(2013, 3, 5, 11, 27, 43, 123);
        });

        it('should return start of the year', function(){
            expect( startOf(baseDate, 'year') ).toEqual(new Date(2013, 0, 1));
        });

        it('should return start of the month', function(){
            expect( startOf(baseDate, 'month') ).toEqual(new Date(2013, 3, 1));
        });

        it('should return start of the week', function(){
            expect( startOf(baseDate, 'week') ).toEqual(new Date(2013, 2, 31));
        });

        it('should return start of the day', function(){
            expect( startOf(baseDate, 'day') ).toEqual(new Date(2013, 3, 5));
        });

        it('should return start of the hour', function(){
            expect( startOf(baseDate, 'hour') ).toEqual(new Date(2013, 3, 5, 11));
        });

        it('should return start of the minute', function(){
            expect( startOf(baseDate, 'minute') ).toEqual(new Date(2013, 3, 5, 11, 27));
        });

        it('should return start of the second', function(){
            expect( startOf(baseDate, 'second') ).toEqual(new Date(2013, 3, 5, 11, 27, 43));
        });

        it('should throw error if invalid "period"', function () {
            expect( function(){
                startOf(baseDate, 'lorem');
            } ).toThrow('"lorem" is not a valid period');
        });

    });

});
