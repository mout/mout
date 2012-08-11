define(function () {

    var _win = this;

    /**
     * Convert array-like object into array
     * @version 0.3.0 (2012/08/11)
     */
    function toArray(val){
        var ret, n;

        if (val == null) {
            ret = [];
        } else if ( typeof val === 'object' && val !== _win && 'length' in val ) {
            //window returns true on isObject in IE7 and may have length property
            //only convert object to array if it is a array-like object
            // typeof val === 'object' is enough since array is also an object
            ret = [];
            n = val.length;
            while (n--) {
                ret[n] = val[n];
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
