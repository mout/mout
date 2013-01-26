define(function(){
    /**
     * "Safer" String.toLowerCase()
     */
    function lowerCase(str){
        return (str || '').toLowerCase();
    }
    return lowerCase;
});
