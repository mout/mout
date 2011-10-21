define(function(){
    /**
     * Add padding zeros if n.length < minLength.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/21)
     * @return {string}
     */
    function pad(n, minLength){
        n = '' + n;
        var len = n.length;
        return len < minLength? (new Array(minLength - len + 1)).join('0') + n : n;
    }
    return pad;
});
