import countSteps from '../math/countSteps';

/**
 * Returns an Array of numbers inside range.
 */
function range(start, stop, step) {
    if (stop == null) {
        stop = start;
        start = 0;
    }
    step = step || 1;

    const result = [];
    const nSteps = countSteps(stop - start, step);
    let i = start;

    while (i <= stop) {
        result.push(i);
        i += step;
    }

    return result;
}

export default range;
