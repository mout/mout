import forIn from './forIn';

/**
 * return a list of all enumerable properties that have function values
 */
function functions<T extends {}>(obj: T): string[] {
    const keys: string[] = [];
    forIn(obj, function(val: Function, key: string) {
        if (typeof val === 'function') {
            keys.push(key);
        }
    });
    return keys.sort();
}

export default functions;
