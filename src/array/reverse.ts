/**
 * Returns a copy of the array in reversed order.
 */
function reverse(array) {
    const copy = array.slice();
    copy.reverse();
    return copy;
}

export default reverse;
