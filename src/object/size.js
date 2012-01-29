define(['./forOwn'], function (forOwn) {

    /**
     * Get object size
     * @author André Cruz
     * @version 0.1.1 (2012/01/28)
     */
    function size(obj) {
        var count = 0;
        forOwn(obj, function(){
            count++;
        });
        return count;
    }

    return size;

});
