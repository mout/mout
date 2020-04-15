import forOwn from './forOwn';

/**
 * Get object values
 */
function values<T>(obj: Record<string, T>): T[] {
    const vals: T[] = [];
    forOwn(obj, function(val: T, key: string) {
        vals.push(val);
    });
    return vals;
}

export default values;
