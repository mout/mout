define(['./forEach'], function(forEach){

    var _filter = Array.prototype.filter;

    /**
     * ES5 filter: Creates a new array with all elements that pass the callback test.
     * @return {array}
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/18)
     */
     function filter(arr, callback, thisObj){
        if(_filter && arr.filter === _filter){
            return arr.filter(callback, thisObj);
        } else {
            var results = [];
            forEach(arr, function(val, i, arr){
                if(callback.call(thisObj, val, i, arr)){
                    results.push(val);
                }
            });
            return results;
        }
    }

    return filter;

});
