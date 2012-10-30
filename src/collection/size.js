define(['../lang/isArray', '../object/size'], function (isArray, objsize) {

    function size(obj) {
        if (!obj) {
            return 0;
        }
        if (isArray(obj)) {
            return obj.length;
        }
        return objsize(obj);
    }

    return size;

});
