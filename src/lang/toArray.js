define(['./isArray', './isObject', './isArguments'], function (isArray, isObject, isArguments) {

    var _arrSlice = Array.prototype.slice;

    /**
     * Convert array-like object into array
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/31)
     */
    function toArray(val){
        var ret, key;

        if (!val) {
            ret = [];
        } else if ( isArray(val) || isArguments(val) || (isObject(val) && 'length' in val) ) {
            ret = _arrSlice.call(val);
        } else if ( isObject(val) ) {
            ret = [];
            for(key in val){
                ret.push( val[key] );
            }
        } else {
            //string, regexp, function have .length but user probably just want
            //to wrap value into an array..
            ret = [val];
        }
        return ret;
    }
    return toArray;
});
