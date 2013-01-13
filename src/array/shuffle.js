define(['../random/randInt', './forEach'], function (randInt, forEach) {

    /**
     * Shuffle array items.
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
