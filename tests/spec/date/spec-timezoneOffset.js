define(['mout/date/timezoneOffset'], function(timezoneOffset){

    describe('date/timezoneOffset', function(){

        it('should return time zone as hour and minute offset from UTC (e.g. +0900)', function(){
            // we mock the date object since getTimezoneOffset always returns
            // value based on system locale
            expect( timezoneOffset({
                getTimezoneOffset: function(){
                    return 180;
                }
            }) ).toBe('-0300');

            expect( timezoneOffset({
                getTimezoneOffset: function(){
                    return -210;
                }
            }) ).toBe('+0330');

        });

    });

});
