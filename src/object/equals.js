define(['./hasOwn', './every', '../lang/isObject'], function(hasOwn, every, isObject) {

    function compareValues(value, key) {
        return hasOwn(this, key) && this[key] === value;
    }

    function checkProperties(value, key) {
        return hasOwn(this, key);
    }

    /**
     * Checks if two objects have the same keys and values.
     */
    function equals(a, b) {
        if (a === b) {
            return true;
        }

        if (!isObject(a) || !isObject(b)) {
            return false;
        }

        // Objects are not equal if created with different constructors
        if (a.constructor !== b.constructor) {
            return false;
        }

        return every(a, compareValues, b) && every(b, checkProperties, a);
    }

    return equals;
});
