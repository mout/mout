define(['./forOwn'], function (forOwn) {

    /**
     * Get object size
	 * @author
	 * @version
     */
    function size(obj) {
        var size = 0;
        forOwn(obj, function(val, key){
            size++;
        });
        return size;
    }

    return size;

});
