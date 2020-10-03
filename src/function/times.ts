/**
 * Iterates over a callback a set amount of times
 */
function times(n, callback, thisObj?: any) {
    let i = -1;
    while (++i < n) {
        if (callback.call(thisObj, i) === false) {
            break;
        }
    }
}

export default times;
