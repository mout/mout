define(['../math/countSteps'], function(countSteps){

    /**
     * Parse timestamp into an object.
     * @version 0.1.0 (2011/12/08)
     */
    function parseMs(ms){
        return {
            milliseconds : countSteps(ms, 1, 1000),
            seconds      : countSteps(ms, 1000, 60),
            minutes      : countSteps(ms, 60000, 60),
            hours        : countSteps(ms, 3600000, 24),
            days         : countSteps(ms, 86400000)
        };
    }

    return parseMs;
});
