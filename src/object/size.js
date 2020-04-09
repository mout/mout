import forOwn from './forOwn';

/**
 * Get object size
 */
function size(obj) {
    var count = 0;
    forOwn(obj, function() {
        count++;
    });
    return count;
}

export default size;
