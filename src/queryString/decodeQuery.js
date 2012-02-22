define(['../string/typecast', '../lang/isString'], function (typecast, isString) {

    /**
     * Decode query string into an object of keys => vals.
     * @version 0.2.0 (2011/10/31)
     */
    function decodeQuery(str) {
        var queryArr = (str || '').replace('?', '').split('&'),
            n = queryArr.length,
            obj = {},
            item, val;
        while (n--) {
            item = queryArr[n].split('=');
            val = typecast(item[1]);
            obj[item[0]] = isString(val)? decodeURIComponent(val) : val;
        }
        return obj;
    }

    return decodeQuery;
});
