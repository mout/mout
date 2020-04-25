import identity from './identity';
import prop from './prop';
import deepMatches from '../object/deepMatches';

/**
 * Converts argument into a valid iterator.
 * Used internally on most array/object/collection methods that receives a
 * callback/iterator providing a shortcut syntax.
 */
function makeIterator(src: Function | object | string | number, thisObj?: any) {
    if (src == null) {
        return identity;
    }
    switch (typeof src) {
        case 'function':
            // function is the first to improve perf (most common case)
            // also avoid using `Function#call` if not needed, which boosts
            // perf a lot in some cases
            return typeof thisObj !== 'undefined'
                ? function(val, i, arr) {
                      return src.call(thisObj, val, i, arr);
                  }
                : src;
        case 'object':
            return function(val) {
                return deepMatches(val, src);
            };
        case 'string':
        case 'number':
            return prop(src);
    }
}

export default makeIterator;
