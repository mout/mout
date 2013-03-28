define(['./forEach', '../function/makeIterator_'], function (forEach, makeIterator) {

    /**
     * Return minimum value inside array
     */
    function min(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return -Infinity;
        } else if (arr.length && !iterator) {
            return Math.min.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = Infinity,
                value,
                temp;

            var i = -1, l = arr.length;
            while (++i < l) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp < compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    return min;

});
