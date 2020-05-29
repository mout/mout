import makeIterator from '../function/makeIterator_';

/**
 * Return minimum value inside array
 */
function min(arr, iterator, thisObj?: any) {
    if (arr == null || !arr.length) {
        return -Infinity;
    } else if (arr.length && !iterator) {
        return Math.min(...arr);
    } else {
        iterator = makeIterator(iterator, thisObj);
        let result;
        let compare = Infinity;
        let value;
        let temp;

        let i = -1;
        const len = arr.length;
        while (++i < len) {
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

export default min;
