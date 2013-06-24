define(['../string/typecast', '../lang/isString', '../lang/isArray', '../object/hasOwn'], function (typecast, isString, isArray, hasOwn) {

    /**
     * Decode query string into an object of keys => vals.
     */
    function decode(queryStr, shouldTypecast) {
        var queryArr = (queryStr || '').replace('?', '').split('&'),
            c = -1,
            n = queryArr.length,
            obj = {},
            item, val, toSet;

        while (++c<n) {
            item = queryArr[c].split('=');
            if (!item[0] || !item[0].length){
                continue;
            }
            val = shouldTypecast === false ? item[1] : typecast(item[1]);
            toSet = isString(val)? decodeURIComponent(val) : val;
            if (hasOwn(obj,item[0])) {
                if(isArray(obj[item[0]])) {
                    obj[item[0]].push(toSet);
                } else {
                    obj[item[0]] = [obj[item[0]],toSet];
                }
            } else {
                obj[item[0]] = toSet;
           }
        }
        return obj;
    }

    return decode;
});
