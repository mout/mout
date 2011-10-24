define(['../math/countSteps'], function(countSteps){

    /**
     * Parse timestamp into an object.
     * @param {number} ms   Milliseconds
     * @return {{milliseconds:number, seconds:number, minutes:number, hours:number, days:number)}
     * @author Miller Medeiros
     * @version 0.2.0 (2011/10/21)
     */
    function split(ms){
        return {
            milliseconds : countSteps(ms, 1, 1000),
            seconds      : countSteps(ms, 1000, 60),
            minutes      : countSteps(ms, 60000, 60),
            hours        : countSteps(ms, 3600000, 24),
            days         : countSteps(ms, 86400000)
        };
    }

    return split;
});
