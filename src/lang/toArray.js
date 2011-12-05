define(['./isArray', './isObject', './isArguments'], function (isArray, isObject, isArguments) {

    /**
     * Convert array-like object into array
     * @author Miller Medeiros
     * @version 0.2.0 (2011/12/05)
     */
    function toArray(val){
        var ret, key;

        if (val == null) {
            ret = [];
        } else if ( val && (isArray(val) || isArguments(val) || (isObject(val) && 'length' in val)) ) {
            //only convert object to array if it is a array-like object
            ret = Array.prototype.slice.call(val);
        } else {
            //string, regexp, function have .length but user probably just want
            //to wrap value into an array..
            ret = [val];
        }
        return ret;
    }
    return toArray;
});
