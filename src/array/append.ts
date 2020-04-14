/**
 * Appends an array to the end of another.
 * The first array will be modified.
 */
function append(arr1, arr2) {
    if (arr2 == null) {
        return arr1;
    }

    const pad = arr1.length;
    let i = -1;
    const len = arr2.length;
    while (++i < len) {
        arr1[pad + i] = arr2[i];
    }
    return arr1;
}
export default append;
