/**
 * Delays the call of a function within a given context.
 */
function timeout(fn, millis, context, ...args) {
    return setTimeout(function() {
        fn.apply(context, args);
    }, millis);
}

export default timeout;
