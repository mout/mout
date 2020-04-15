import forOwn from './forOwn';

/**
 * checks if a object contains all given properties/values
 */
function matches(target: Record<string, any>, props: string[]): boolean {
    // can't use "object/every" because of circular dependency
    let result = true;
    forOwn(props, function(val: any, key: string) {
        if (target[key] !== val) {
            // break loop at first difference
            return (result = false);
        }
    });
    return result;
}

export default matches;
