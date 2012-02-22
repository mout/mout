define(function(){
    /**
     * Bitwise circular shift left
     * http://en.wikipedia.org/wiki/Circular_shift
     * @version 0.1.0 (2011/10/21)
     */
    function rol(val, shift){
        return (val << shift) | (val >> (32 - shift));
    }
    return rol;
});
