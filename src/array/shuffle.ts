import randInt from '../random/randInt';

/**
 * Shuffle array items.
 */
function shuffle(arr) {
    const results = [];
    let rnd;
    if (arr == null) {
        return results;
    }

    let i = -1;
    const len = arr.length;
    while (++i < len) {
        if (!i) {
            results[0] = arr[0];
        } else {
            rnd = randInt(0, i);
            results[i] = results[rnd];
            results[rnd] = arr[i];
        }
    }

    return results;
}

export default shuffle;
