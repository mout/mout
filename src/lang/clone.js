define(['../object/forOwn', './kindOf'], function (forOwn, kindOf) {

    /**
     * Clone native types.
     * @version 0.1.0 (2012/07/13)
     */
    function clone(val, instanceClone) {
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
        if (source.constructor === Object) {
            var out = {};
            forOwn(source, function(val, key) {
                this[key] = clone(val, instanceClone);
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
            out[i] = clone(arr[i], instanceClone);
        }
        return out;
    }

    return clone;

});

