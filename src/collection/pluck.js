define(['./map'], function (map) {

    function pluck(list, key) {
        return map(list, function(value) {
            return value[key];
        });
    }

    return pluck;

});
