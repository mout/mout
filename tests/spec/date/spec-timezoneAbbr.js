define(['mout/date/timezoneAbbr'], function(timezoneAbbr){

    describe('date/timezoneAbbr', function(){

        it('should return timezone abbreviation or similar data', function(){
            // we use fake date objects because timezone info will be different
            // based on user system (tests should be deterministic)
            expect( timezoneAbbr({
                toString : function(){
                    // FF/Chrome/Safari
                    return 'Mon Apr 08 2013 09:02:04 GMT-0300 (BRT)';
                }
            }) ).toEqual('BRT');

            expect( timezoneAbbr({
                getTimezoneOffset : function(){
                    return 180;
                },
                toString : function(){
                    // IE doesn't return TZ abbr info so we fallback to offset
                    return 'Mon Apr 8 09:02:04 UTC-0300 2013';
                }
            }) ).toEqual('-0300');
        });

    });

});
