import slice from '../array/slice';

/**
 * Delays the call of a function within a given context.
 */
function timeout(fn, millis, context) {
    var args = slice(arguments, 3);

    return setTimeout(function() {
        fn.apply(context, args);
    }, millis);
}

export default timeout;
