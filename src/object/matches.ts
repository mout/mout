import forOwn from './forOwn';

/**
 * checks if a object contains all given properties/values
 */
function matches<T>(target: Record<string, T>, props: string[]): boolean {
    // can't use "object/every" because of circular dependency
    let result = true;
    forOwn(props, function(val: T, key: string) {
        if (target[key] !== val) {
            // break loop at first difference
            return (result = false);
        }
    });
    return result;
}

export default matches;
