define(['mout/date/diff'], function(diff){

    describe('date/diff', function(){

        var d1 = new Date(2012, 4, 5);
        var d2 = new Date(2013, 4, 5);


        it('should return the difference between dates in milliseconds by default', function(){
            expect( diff(d1, d2) ).toBe( d2 - d1 );
        });


        it('should handle difference even if arguments are in the "wrong" order', function(){
            expect( diff(d2, d1) ).toBe( d2 - d1 );
        });


        describe('basic units', function () {
            it('should support "second" unit', function () {
                expect( diff(d1, d2, 'second') ).toBe( (d2 - d1)/1000 );
            });

            it('should support "minute" unit', function () {
                expect( diff(d1, d2, 'minute') ).toBe( (d2 - d1)/ (1000 * 60) );
            });

            it('should support "hour" unit', function () {
                expect( diff(d1, d2, 'hour') ).toBe( (d2 - d1)/ (1000 * 60 * 60) );
            });

            it('should support "day" unit', function () {
                expect( diff(d1, d2, 'day') ).toBe( (d2 - d1)/ (1000 * 60 * 60 * 24) );
            });

            it('should support "week" unit', function () {
                expect( diff(d1, d2, 'week') ).toBe( (d2 - d1)/ (1000 * 60 * 60 * 24 * 7) );
            });

            it('should throw error if unit is invalid', function () {
                expect( function(){
                    diff(d1, d2, 'lorem');
                } ).toThrow( '"lorem" is not a valid unit' );
            });

            it('should disconsider daylight time savings', function () {
                // we need to fake the date object since IE doesn't allow
                // setting the timezone (for us to test it properly)

                function ret(val){
                    return function(){
                        return val;
                    };
                }

                // var d3 = new Date('Wed Feb 12 2014 00:00:00 GMT-0200 (BRST)');
                var d3 = {
                    getUTCFullYear : ret(2014),
                    getUTCMonth : ret(1),
                    getUTCDate: ret(12),
                    getHours: ret(0),
                    getMinutes: ret(0),
                    getSeconds: ret(0),
                    getMilliseconds: ret(0),
                    getTimezoneOffset: ret(120),
                    valueOf: ret(1392170400000)
                };

                // var d4 = new Date('Sun Feb 16 2014 00:00:00 GMT-0300 (BRT)');
                var d4 = {
                    getUTCFullYear : ret(2014),
                    getUTCMonth : ret(1),
                    getUTCDate: ret(16),
                    getHours: ret(0),
                    getMinutes: ret(0),
                    getSeconds: ret(0),
                    getMilliseconds: ret(0),
                    getTimezoneOffset: ret(180),
                    valueOf: ret(1392519600000)
                };

                expect( diff(d3, d4, 'day') ).toBe( 4 );
            });

        });


        describe('complex units', function () {

            describe('month', function () {

                it('should support "month" unit', function () {
                    expect( diff(d1, d2, 'month') ).toBe( 12 );
                });

                it('should handle arguments on mixed order', function () {
                    expect( diff(d2, d1, 'month') ).toBe( 12 );
                });

                it('should handle year switch', function () {
                    var d3 = new Date(2012, 11, 15);
                    var d4 = new Date(2013, 0, 15);
                    expect( diff(d3, d4, 'month') ).toEqual( 1 );
                });

                it('should handle partial months', function () {
                    var d3 = new Date(2013, 1, 5);
                    var d4 = new Date(2013, 1, 14);
                    expect( diff(d3, d4, 'month') ).toEqual( 0.32142857142857145 );
                });

                it('should calculate partial month based on amount of days between start and end relative to the amount od days until the next full month', function () {
                    var d3 = new Date(2012, 10, 20);
                    var d4 = new Date(2013, 1, 14);
                    // yes, it isn't 2.5 since partial month should start at
                    // day 20 of first month and end at day 20 of last month
                    // (in this case the "partial month" have 30 days and 24
                    // "partial days" elapsed)
                    expect( diff(d3, d4, 'month') ).toEqual( 2.8 );
                });

                it('should count total days in the month relative to 1st day of next month if endMonth has less days than startDay', function () {
                    var d3 = new Date(2013, 0, 29);
                    var d4 = new Date(2013, 1, 27);
                    // yes, even tho 29 days elapsed and Feb only contains 28 days
                    // it should still not count as a full month
                    expect( diff(d3, d4, 'month') ).toEqual( 0.9354838709677419 );
                });

                it('should calculate total days based on endMonth if startDay < endDay', function () {
                    var d3 = new Date(2013, 0, 12);
                    var d4 = new Date(2013, 1, 18);
                    expect( diff(d3, d4, 'month') ).toEqual( 1.2142857142857142 );
                });

                it('should handle large periods', function () {
                    var d3 = new Date(2008, 0, 1);
                    var d4 = new Date(2013, 11, 16);
                    expect( diff(d3, d4, 'month') ).toBe( 71.48387096774194 );
                });

            });


            describe('year', function () {

                it('should support "year" unit', function () {
                    expect( diff(d1, d2, 'year') ).toBe( 1 );
                });

                it('should support accurate partial years', function () {
                    var d3 = new Date(2010, 0, 1);
                    var d4 = new Date(2013, 11, 30);
                    // 1459 days: 3 years + 363 days elapsed in 2013
                    expect( diff(d3, d4, 'year') ).toBe( 3 + 363 / 365 );
                });

                it('should handle year fragment < 1', function () {
                    var d3 = new Date(2012, 11, 1);
                    var d4 = new Date(2013, 3, 1);
                    // 121 days and 2013 have 365 years
                    expect( diff(d3, d4, 'year') ).toBe( 121 / 365 );
                });

                it('should handle leap years', function () {
                    var d3 = new Date(2004, 2, 3);
                    var d4 = new Date(2004, 7, 3);
                    // 153 days and 2004 have 366 days
                    expect( diff(d3, d4, 'year') ).toEqual( 153 / 366 );
                });

            });

        });


    });

});
