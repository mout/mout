define(['../lang/isObject'], function (isObject) {

    var owns = Object.prototype.hasOwnProperty,
        _hasDontEnumBug,
        _dontEnums,
        _dontEnumsLength;

    function checkDontEnum(){
        _dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

        _dontEnumsLength = _dontEnums.length;
        _hasDontEnumBug = true;

        for (var key in {'toString': null}) {
            _hasDontEnumBug = false;
        }
    }

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     * @author Miller Medeiros
     * @version 0.1.0 (2011/12/05)
     */
    function forIn(obj, fn, thisObj){

        if (!isObject(obj)) {
            throw new TypeError('forIn called on a non-object');
        }

        //post-pone check till needed
        if (_hasDontEnumBug == null) checkDontEnum();

        for (var key in obj) {
            exec(fn, obj, key, thisObj);
        }

        if (_hasDontEnumBug) {
            for (var i = 0; i < _dontEnumsLength; i++) {
                exec(fn, obj, _dontEnums[i], thisObj);
            }
        }
    }

    function exec(fn, obj, key, thisObj){
        if (owns.call(obj, key)) {
            fn.call(thisObj, obj[key], key, obj);
        }
    }

    return forIn;

});
