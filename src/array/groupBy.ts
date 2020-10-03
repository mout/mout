import forEach from '../array/forEach';
import identity from '../function/identity';
import makeIterator from '../function/makeIterator_';

/**
 * Bucket the array values.
 */
function groupBy(arr, categorize, thisObj?: any) {
    if (categorize) {
        categorize = makeIterator(categorize, thisObj);
    } else {
        // Default to identity function.
        categorize = identity;
    }

    const buckets = {};
    forEach(arr, function(element) {
        const bucket = categorize(element);
        if (!(bucket in buckets)) {
            buckets[bucket] = [];
        }

        buckets[bucket].push(element);
    });

    return buckets;
}

export default groupBy;
