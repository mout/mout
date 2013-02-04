define(['./every', './forOwn', '../lang/isObject'], function(every, forOwn, isObject) {

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

        var size = 0;
        var result = true;
        forOwn(a, function(value, key) {
            size++;
            if (b[key] !== value) {
                return (result = false);
            }
        });

        if (!result) {
            return false;
        }

        forOwn(b, function() {
            return --size >= 0;
        });

        return size === 0;
    }

    return equals;
});
