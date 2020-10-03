import forIn from './forIn';

/**
 * return a list of all enumerable properties that have function values
 */
function functions<T extends {}>(obj: T): Array<keyof T> {
    const keys: Array<keyof T> = [];
    forIn(obj, function(val: Function, key: keyof T) {
        if (typeof val === 'function') {
            keys.push(key);
        }
    });
    return keys.sort();
}

export default functions;
