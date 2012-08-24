define(['./filter'], function(filter) {

    function isValidString(val) {
        return (typeof val === 'string' && val !== '');
    }

    /**
     * Joins strings with the specified separator inserted between each value.
     * Null values and empty strings will be excluded.
     * @version 0.1.0 (2012/08/24)
     */
    function join(items, separator) {
        return filter(items, isValidString).join(separator);
    }
});
