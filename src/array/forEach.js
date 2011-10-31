define(function(){

    var _nativeForEach = Array.prototype.forEach;

    /**
     * ES5 Array.forEach
     * @author Miller Medeiros
     * @version 0.2.1 (2011/10/31)
     */
     function forEach(arr, callback, thisObj){
        if(_nativeForEach && arr.forEach === _nativeForEach){
            arr.forEach(callback, thisObj);
        } else {
            for(var i = 0, n = arr.length, item; i < n; i++){
                //according to spec callback should only be called for
                //existing items
                if(i in arr) {
                    callback.call(thisObj, arr[i], i, arr);
                }
            }
        }
    }

    return forEach;

});
