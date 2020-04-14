/**
 * Create an array of size N and fill with a value.
 * This function will throw an exception in case
 * you pass a negative number.
 */
function repeat(n, value) {
    const arr = new Array(n);
    return arr.fill(value);
}

export default repeat;
