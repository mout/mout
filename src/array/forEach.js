define(function(){

    var _forEach = Array.prototype.forEach,
        UNDEF;

    /**
     * ES5 Array.forEach
     * @author Miller Medeiros
     * @version 0.2.0 (2011/10/31)
     */
     function forEach(arr, callback, thisObj){
        if(_forEach && arr.forEach === _forEach){
            arr.forEach(callback, thisObj);
        } else {
            for(var i = 0, n = arr.length, item; i < n; i++){
                item = arr[i];
                //according to spec callback should only be called for
                //existing items
                if(item !== UNDEF){
                    callback.call(thisObj, item, i, arr);
                }
            }
        }
    }

    return forEach;

});
