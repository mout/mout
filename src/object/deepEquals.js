define(['./hasOwn', './every', '../lang/isObject'], function (hasOwn, every, isObject) {

    function compareValues(value, key) {
        return hasOwn(this, key) && deepEquals(this[key], value);
    }

    function checkProperties(value, key) {
        return hasOwn(this, key);
    }

    /**
     * Recursively checks for same properties and values.
     */
    function deepEquals(a, b){
        if (a === b) {
            return true;
        } else if (!isObject(a) || !isObject(b)) {
            return false;
        }

        return every(a, compareValues, b) && every(b, checkProperties, a);
    }

    return deepEquals;

});
