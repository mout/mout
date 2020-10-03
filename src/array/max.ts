import makeIterator from '../function/makeIterator_';

/**
 * Return maximum value inside array
 */
function max(arr, iterator?, thisObj?: any) {
    if (arr == null || !arr.length) {
        return Infinity;
    } else if (arr.length && !iterator) {
        // eslint-disable-next-line prefer-spread
        return Math.max.apply(Math, arr);
    } else {
        iterator = makeIterator(iterator, thisObj);
        let result;
        let compare = -Infinity;
        let value;
        let temp;

        let i = -1;
        const len = arr.length;
        while (++i < len) {
            value = arr[i];
            temp = iterator(value, i, arr);
            if (temp > compare) {
                compare = temp;
                result = value;
            }
        }

        return result;
    }
}

export default max;
