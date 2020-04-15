import forEach from '../array/forEach';

/**
 * Create nested object if non-existent
 */
function namespace(obj, path) {
    if (!path) return obj;
    forEach(path.split('.'), function(key) {
        if (!obj[key]) {
            obj[key] = {};
        }
        obj = obj[key];
    });
    return obj;
}

export default namespace;
