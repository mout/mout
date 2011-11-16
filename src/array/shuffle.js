define(['../math/randInt', './forEach'], function (randInt, forEach) {

    /**
     * Shuffle array items.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/15)
     */
    function shuffle(arr) {
        var result = [],
            rnd;
        forEach(arr, function(val, i, arr){
            if (!i) {
                result[0] = val;
            } else {
                rnd = randInt(0, i+1);
                result[i] = result[rnd];
                result[rnd] = val;
            }
        });
        return result;
    }

    return shuffle;
});
