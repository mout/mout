import forOwn from './forOwn';
import isArray from '../lang/isArray';

function containsMatch(array, pattern) {
    let i = -1;
    const length = array.length;
    while (++i < length) {
        if (deepMatches(array[i], pattern)) {
            return true;
        }
    }

    return false;
}

function matchArray(target, pattern) {
    let i = -1;
    const patternLength = pattern.length;
    while (++i < patternLength) {
        if (!containsMatch(target, pattern[i])) {
            return false;
        }
    }

    return true;
}

function matchObject(target, pattern) {
    let result = true;
    forOwn(pattern, function(val, key) {
        if (!deepMatches(target[key], val)) {
            // Return false to break out of forOwn early
            return (result = false);
        }
    });

    return result;
}

/**
 * Recursively check if the objects match.
 */
function deepMatches(target, pattern) {
    if (target && typeof target === 'object' && pattern && typeof pattern === 'object') {
        if (isArray(target) && isArray(pattern)) {
            return matchArray(target, pattern);
        } else {
            return matchObject(target, pattern);
        }
    } else {
        return target === pattern;
    }
}

export default deepMatches;
