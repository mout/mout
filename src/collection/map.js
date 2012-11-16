define(['./forEach', './size'], function (forEach, size) {

    function map(list, callback, thisObj) {
        var results = [];
        if (list == null) {
            return results;
        }
        // need to copy list.length because of sparse arrays (#64)
        results.length = list.length || size(list);
        var i = 0;
        forEach(list, function (val, key, list) {
            results[i++] = callback.call(thisObj, val, key, list);
        });
        return results;
    }

    return map;

});
