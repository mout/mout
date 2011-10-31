define(['./forEach'], function(forEach){

    var _nativeFilter = Array.prototype.filter;

    /**
     * ES5 Array.filter: Creates a new array with all elements that pass the callback test.
     * @return {array}
     * @author Miller Medeiros
     * @version 0.2.0 (2011/10/31)
     */
     function filter(arr, callback, thisObj){
        var results;
        if(_nativeFilter && arr.filter === _nativeFilter){
            results = arr.filter(callback, thisObj);
        } else {
            results = [];
            forEach(arr, function(val, i, arr){
                if(callback.call(thisObj, val, i, arr)){
                    results.push(val);
                }
            });
        }
        return results;
    }

    return filter;

});
