import isFunction from '../lang/isFunction';
import hasOwn from '../object/hasOwn';

/**
 * Creates a function that memoizes the result of `fn`. If `resolver` is
 * provided it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is coerced to a string and used as the
 * cache key. The `fn` is invoked with the `this` binding of the memoized
 * function. Modified from lodash.
 *
 * @param {Function} fn Function to have its output memoized.
 * @param {Function} context Function to resolve the cache key.
 * @return {Function} Returns the new memoized function.
 */
function memoize(fn, resolver) {
    if (!isFunction(fn) || (resolver && !isFunction(resolver))) {
        throw new TypeError('Expected a function');
    }

    const memoized = function() {
        const cache = memoized.cache;
        const key = resolver ? resolver.apply(this, arguments) : arguments[0];

        if (hasOwn(cache, key)) {
            return cache[key];
        }
        const result = fn.apply(this, arguments);
        cache[key] = result;
        return result;
    };

    memoized.cache = {};

    return memoized;
}

export default memoize;
