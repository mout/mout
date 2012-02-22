define(['../math/countSteps'], function (countSteps) {

    /**
     * Returns an Array of numbers inside range.
     * @version 0.1.0 (2011/11/15)
     */
    function range(start, stop, step) {
        if (stop == null) {
            stop = start;
            start = 0;
        }
        step = step || 1;

        var result = [],
            nSteps = countSteps(stop - start, step),
            i = start;

        while (i <= stop) {
            result.push(i);
            i += step;
        }

        return result;
    }

    return range;

});
