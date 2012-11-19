define(['../lang/isArray', '../object/size'], function (isArray, objSize) {

    /**
     * Get collection size
     * @version 0.2.0 (2012/11/16)
     */
    function size(list) {
        if (!list) {
            return 0;
        }
        if (isArray(list)) {
            return list.length;
        }
        return objSize(list);
    }

    return size;

});
