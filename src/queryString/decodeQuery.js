define(['../string/typecast'], function (typecast) {

    /**
     * Decode query string into an object of keys => vals.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/29)
     */
    function decodeQuery(str) {
        var queryArr = (str || '').replace('?', '').split('&'),
            n = queryArr.length,
            obj = {},
            item, val;
        while (n--) {
            item = queryArr[n].split('=');
            val = item[1];
            obj[item[0]] = typecast(val);
        }
        return obj;
    }

    return decodeQuery;
});
