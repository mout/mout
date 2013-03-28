define(['./hasOwn', './every', '../lang/isObject'], function(hasOwn, every, isObject) {

    // Default compare function
    function compareValues(value, key) {
        return hasOwn(this, key) && this[key] === value;
    }

    // Makes a function to compare the object values from the specified compare
    // operation callback.
    function makeCompare(callback) {
        return function(value, key) {
            return hasOwn(this, key) && callback(value, this[key]);
        };
    }

    function checkProperties(value, key) {
        return hasOwn(this, key);
    }

    /**
     * Checks if two objects have the same keys and values.
     */
    function equals(a, b, callback) {
        if (a === b) {
            return true;
        } else if (!isObject(a) || !isObject(b)) {
            return false;
        }

        var compare = callback ? makeCompare(callback) : compareValues;
        return every(a, compare, b) && every(b, checkProperties, a);
    }

    return equals;
});
