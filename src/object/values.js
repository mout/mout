import forOwn from './forOwn';

/**
 * Get object values
 */
function values(obj) {
    var vals = [];
    forOwn(obj, function(val, key) {
        vals.push(val);
    });
    return vals;
}

export default values;
