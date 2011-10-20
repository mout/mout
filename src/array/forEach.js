define(function(){

    var _forEach = Array.prototype.forEach;

    /**
     * ES5 forEach
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/18)
     */
     function forEach(arr, callback, thisObj){
        if(_forEach && arr.forEach === _forEach){
            arr.forEach(callback, thisObj);
        } else {
            for(var i = 0, n = arr.length, item; i < n; i++){
                item = arr[i];
                //according to spec callback should only be called for
                //existing items
                if(typeof item !== 'undefined'){
                    callback.call(thisObj, item, i, arr);
                }
            }
        }
    }

    return forEach;

});
