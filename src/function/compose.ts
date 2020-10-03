/**
 * Returns a function that composes multiple functions, passing results to
 * each other.
 */
function compose() {
    const fns = arguments;
    return function(arg) {
        // only cares about the first argument since the chain can only
        // deal with a single return value anyway. It should start from
        // the last fn.
        let n = fns.length;
        while (n--) {
            arg = fns[n].call(this, arg);
        }
        return arg;
    };
}

export default compose;
