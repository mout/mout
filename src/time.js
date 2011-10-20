define(function(){

    function part(ms, unit, mod){
        return (Math.floor(ms/unit) % mod) ^ 0;
    }

    /**
     * Utilities for time manipulation.
     * @exports amd-utils/time
     * @version 0.0.1 (2011/08/19)
     * @author Miller Medeiros
     */
    var timeUtils = {

        //aproximated miliseconds time conversion (using a 365.242199 days year)
        MILISECOND : 1,
        SECOND : 1000,
        MINUTE : 60000,
        HOUR : 3600000,
        DAY : 86400000,
        WEEK : 604800000,
        MONTH : 2629743830,
        YEAR : 31556926000,

        /**
         * Parse timestamp into an object.
         * IMPORTANT: it doesn't handle Weeks, Months and Years.
         * @param {number} ms   Miliseconds
         * @return {{miliseconds:number, seconds:number, minutes:number, hours:number, days:number)}
         */
        split : function(ms){
            var time = {
                miliseconds : part(ms, timeUtils.MILISECOND, 1000),
                seconds : part(ms, timeUtils.SECOND, 60),
                minutes : part(ms, timeUtils.MINUTE, 60),
                hours : part(ms, timeUtils.HOUR, 24),
                days : Math.floor(ms / timeUtils.DAY)
            };
            return time;
        },

        /**
        * Format timestamp into a time string.
        * @param {number} ms Miliseconds
        * @return {string} Time string on the format 'HH:MM:SS'.
        */
        toTimeString : function(ms){
            var output = Math.floor(ms / timeUtils.HOUR) +':'+ part(ms, timeUtils.MINUTE, 60) +':'+ part(ms, timeUtils.SECOND, 60);
            return output.replace(/(:|^)([0-9])(?=:|$)/g, '$10$2'); //add zero before single digits
        }

    };

    return timeUtils;
});
