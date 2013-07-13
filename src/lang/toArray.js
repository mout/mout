define(['./kindOf', './isArguments'], function (kindOf, isArguments) {

    var _win = this;

    /**
     * Convert array-like object into array
     */
    function toArray(val){
        var ret = [],
            kind = kindOf(val),
            n;

        if (val != null) {
            if (isArguments(val)) {
                // if the value given is an arguments object we just slice it
                // and return the result, this should save some resources compared
                // with an iteration, besides if a user is intentionally giving
                // an arguments object, it most probably just want to avoid the
                // pseudo-array gotchas
                return Array.prototype.slice.call(val, 0);
            }
            if ( val.length == null || kind === 'String' || kind === 'Function' || kind === 'RegExp' || val === _win ) {
                //string, regexp, function have .length but user probably just want
                //to wrap value into an array..
                ret[ret.length] = val;
            } else {
                //window returns true on isObject in IE7 and may have length
                //property. `typeof NodeList` returns `function` on Safari so
                //we can't use it (#58)
                n = val.length;
                while (n--) {
                    ret[n] = val[n];
                }
            }
        }
        return ret;
    }
    return toArray;
});
