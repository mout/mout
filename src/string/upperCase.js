define(function(){
    /**
     * "Safer" String.toUpperCase()
     * @version 0.1.0 (2011/10/19)
     * @author Miller Medeiros
     */
    function upperCase(str){
        return (str || '').toUpperCase();
    }
    return upperCase;
});
