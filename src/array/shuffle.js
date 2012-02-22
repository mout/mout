define(['../random/randInt', './forEach'], function (randInt, forEach) {

    /**
     * Shuffle array items.
     * @version 0.2.0 (2011/11/17)
     */
    function shuffle(arr) {
        var result = [],
            rnd;
        forEach(arr, function(val, i, arr){
            if (!i) {
                result[0] = val;
            } else {
                rnd = randInt(0, i);
                result[i] = result[rnd];
                result[rnd] = val;
            }
        });
        return result;
    }

    return shuffle;
});
