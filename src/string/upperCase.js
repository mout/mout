define(function(){
    /**
     * "Safer" String.toUpperCase()
     */
    function upperCase(str){
        return (str || '').toUpperCase();
    }
    return upperCase;
});
