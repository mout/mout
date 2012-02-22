define(['./isArray', './isObject', './isArguments'], function (isArray, isObject, isArguments) {

    var _win = this;

    /**
     * Convert array-like object into array
     * @version 0.2.0 (2011/12/05)
     */
    function toArray(val){
        var ret;

        if (val == null) {
            ret = [];
        } else if ( val && val !== _win && (isArray(val) || isArguments(val) || (isObject(val) && 'length' in val)) ) {
            //window returns true on isObject in IE7 and may have length property
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
