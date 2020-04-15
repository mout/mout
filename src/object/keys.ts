import forOwn from './forOwn';

/**
 * Get object keys
 */
const keys =
    Object.keys ||
    function(obj: object) {
        const keys: string[] = [];
        forOwn(obj, function(_, key: string) {
            keys.push(key);
        });
        return keys;
    };

export default keys;
