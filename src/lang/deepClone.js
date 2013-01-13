define(['../object/forOwn', './kindOf', './isPlainObject'], function (forOwn, kindOf, isPlainObject) {

    /**
     * Clone native types.
     */
    function deepClone(val, instanceClone) {
        var result;
        switch ( kindOf(val) ) {
            case 'Object':
                result = cloneObject(val, instanceClone);
                break;
            case 'Array':
                result = cloneArray(val, instanceClone);
                break;
            case 'RegExp':
                result = cloneRegExp(val);
                break;
            case 'Date':
                result = cloneDate(val);
                break;
            default:
                result = val;
        }
        return result;
    }

    function cloneObject(source, instanceClone) {
        if (isPlainObject(source)) {
            var out = {};
            forOwn(source, function(val, key) {
                this[key] = deepClone(val, instanceClone);
            }, out);
            return out;
        } else if (instanceClone) {
            return instanceClone(source);
        } else {
            return source;
        }
    }

    function cloneRegExp(r) {
        var flags = '';
        flags += r.multiline? 'm' : '';
        flags += r.global? 'g' : '';
        flags += r.ignoreCase? 'i' : '';
        return new RegExp(r.source, flags);
    }

    function cloneDate(date) {
        return new Date( date.getTime() );
    }

    function cloneArray(arr, instanceClone) {
        var out = [],
            i = -1,
            n = arr.length,
            val;
        while (++i < n) {
            out[i] = deepClone(arr[i], instanceClone);
        }
        return out;
    }

    return deepClone;

});

