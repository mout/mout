define(function(){
    /**
     * "Safer" String.toUpperCase()
     * @version 0.1.0 (2011/10/19)
     */
    function upperCase(str){
        return (str || '').toUpperCase();
    }
    return upperCase;
});
