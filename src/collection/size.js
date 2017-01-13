define(['../object/size', '../lang/isInteger'], function (objSize, isInteger) {

    /**
     * Get collection size
     */
    function size(list) {
        if (!list) {
            return 0;
        }
        if (isInteger(list.length)) {
            return list.length;
        }
        return objSize(list);
    }

    return size;

});
