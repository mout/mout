define(function(){

    var _idxOf = Array.prototype.indexOf;

    /**
     * ES5 indexOf (since it doesn't work on IE 6-8 natively)
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/18)
     */
    function indexOf(arr, item, fromIndex){
        fromIndex = fromIndex || 0;
        if(_idxOf && arr.indexOf === _idxOf){
            return arr.indexOf(item, fromIndex);
        } else {
            var n = arr.length,
                i = fromIndex < 0? n + fromIndex : fromIndex;
            for(; i < n; i += 1){
                if(arr[i] === item) return i;
            }
            return -1;
        }
    }

    return indexOf;
});
