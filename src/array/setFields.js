define(function () {

    /**
     * Copy properties from the given object into all objects from the array.
     *
     * @param {Array} list
     *      Array of objects which should be processed.
     * @param {Object} fieldMap
     *      Object containing properties that should be copied.
     * @return {Array}
     *      The source array with modified objects.
     */
    function setFields(list, fieldMap) {
        var q = list.length,
            field, i, obj;
        if (q && fieldMap && typeof fieldMap === 'object') {
            for (i = 0; i < q; i++) {
                obj = list[i];
                if (obj && typeof obj === 'object') {
                    for (field in fieldMap) {
                        obj[field] = fieldMap[field];
                    }
                }
            }
        }
        return list;
    }

     return setFields;
});
