define(function () {

    /**
     * Checks if the value is created by the `Object` constructor.
     * @version 0.1.0 (2013/01/11)
     */
    function isPlainObject(value) {
        return (!!value
            && typeof value === 'object'
            && value.constructor === Object);
    }

    return isPlainObject;

});
