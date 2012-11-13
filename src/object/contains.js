define(['./every'], function (every) {

    function contains(obj, containsVal) {
        var result = false;
        every(obj, function(val) {
            if (val === containsVal) {
                result = true;
                return false; //break
            }
            return true;
        });
        return result;
    }
    return contains;

});
