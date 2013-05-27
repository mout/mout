define(['./pick', '../math/clamp'], function (pick, clamp) {

    /**
     * Gets [N] random items and remove them from the original array.
     */
    function pickMany(arr, nItems){
        var result = [];
        if (!arr || !arr.length) return result;

        nItems = clamp(nItems, 0, arr.length);

        while (nItems-- > 0) {
            result.push( pick(arr) );
        }

        return result;
    }

    return pickMany;

});
