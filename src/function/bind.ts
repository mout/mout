/**
 * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.
 * @param {Function} fn  Function.
 * @param {object} context   Execution context.
 * @param {rest} args    Arguments (0...n arguments).
 * @return {Function} Wrapped Function.
 */
function bind(fn, context, ...args) {
    return function(...innerArgs) {
        return fn.apply(context, args.concat(innerArgs));
    };
}

export default bind;
