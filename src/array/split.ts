/**
 * Split array into a fixed number of segments.
 */
function split(array, segments = 2) {
    const results = [];
    if (array == null) {
        return results;
    }

    const minLength = Math.floor(array.length / segments);
    const remainder = array.length % segments;
    let i = 0;
    const len = array.length;
    let segmentIndex = 0;
    let segmentLength;

    while (i < len) {
        segmentLength = minLength;
        if (segmentIndex < remainder) {
            segmentLength++;
        }

        results.push(array.slice(i, i + segmentLength));

        segmentIndex++;
        i += segmentLength;
    }

    return results;
}
export default split;
