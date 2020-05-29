/**
 * Iterates over a callback a set amount of times
 * returning the results
 */
function take(n, callback, thisObj?: any) {
    let i = -1;
    const arr = [];
    if (!thisObj) {
        while (++i < n) {
            arr[i] = callback(i, n);
        }
    } else {
        while (++i < n) {
            arr[i] = callback.call(thisObj, i, n);
        }
    }
    return arr;
}

export default take;
