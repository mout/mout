define(function(){
    /**
     * "Safer" String.toLowerCase()
     */
    function upperCase(str){
        return (str || '').toLowerCase();
    }
    return upperCase;
});
