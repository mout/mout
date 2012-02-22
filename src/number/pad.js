define(['../string/lpad'], function(lpad){

    /**
     * Add padding zeros if n.length < minLength.
     * @version 0.2.0 (2011/11/1)
     */
    function pad(n, minLength){
        return lpad(''+ n, minLength, '0');
    }

    return pad;

});
