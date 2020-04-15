import max from './max';
import map from './map';

function getLength(arr) {
    return arr == null ? 0 : arr.length;
}

/**
 * Merges together the values of each of the arrays with the values at the
 * corresponding position.
 */
function zip(arr) {
    const len = arr ? max(map(arguments, getLength)) : 0;
    const results = [];
    let i = -1;
    while (++i < len) {
        // jshint loopfunc: true
        results.push(
            map(arguments, function(item) {
                return item == null ? undefined : item[i];
            }),
        );
    }

    return results;
}

export default zip;