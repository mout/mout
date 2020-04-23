import makeIterator from '../function/makeIterator_';

/**
 * Return maximum value inside array
 */
function max<T>(arr: T[], iterator?: Function | string, thisObj?: any): T | undefined {
    if (arr == null || !arr.length) {
        return undefined;
    } else if (arr.length && !iterator) {
        /* eslint-disable */
        // TODO: This requires stricter typing and a spread operator.
        // @ts-ignore
        return Math.max(...arr);
        /* eslint-enable */
    } else {
        iterator = makeIterator(iterator!, thisObj);
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
