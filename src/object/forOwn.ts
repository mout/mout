import hasOwn from './hasOwn';
import forIn from './forIn';

/**
 * Similar to Array/forEach but works over object properties and fixes Don't
 * Enum bug on IE.
 * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
 */
function forOwn(obj: Record<string, any>, fn: Function, thisObj?: any) {
    forIn(obj, function(_, key: string) {
        if (hasOwn(obj, key)) {
            return fn.call(thisObj, obj[key], key, obj);
        }
    });
}

export default forOwn;
