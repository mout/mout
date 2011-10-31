define(['./forEach'], function (forEach) {

    var _nativeMap = Array.prototype.map;

    /**
     * ES5 Array.map : Creates a new array with the results of calling
     * a provided function on every element in this array.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/31)
     */
     function map(arr, callback, thisObj){
         var results;
         if(_nativeMap && arr.map === _nativeMap){
             results = arr.map(callback, thisObj);
         } else {
            results = [];
            forEach(arr, function(val, i, arr){
                results[results.length] = callback.call(thisObj, val, i, arr);
            });
         }
         return results;
     }
     return map;
});
