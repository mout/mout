define(['./forOwn'], function (forOwn) {

    /**
     * Get object size
     * @author André Cruz
     * @version 0.1.0 (2012/01/19)
     */
    function size(obj) {
        var size = 0;
        forOwn(obj, function(){
            size++;
        });
        return size;
    }

    return size;

});
