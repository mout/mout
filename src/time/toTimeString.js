define(['../math/countSteps', '../number/pad'], function(countSteps, pad){
    /**
     * Format timestamp into a time string.
     * @param {number} ms Milliseconds
     * @return {string} Time string on the format 'HH:MM:SS'.
     * @version 0.2.0 (2011/10/21)
     */
    function toTimeString(ms){
        return pad(countSteps(ms, 3600000), 2) +':'+ pad(countSteps(ms, 60000, 60), 2) +':'+ pad(countSteps(ms, 1000, 60), 2);
    }
    return toTimeString;
});
