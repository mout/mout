define(function(){
    /**
    * Remove white-spaces from beginning and end of string.
    * @example trim('   lorem ipsum   ') -> 'lorem ipsum'
    * @param {string} str
    * @return {string}
    * @author Miller Medeiros
    * @version 0.1.0 (2011/07/20)
    */
    function trim(str){
        return (str || '').replace(/^\s+|\s+$/g, '');
    }
    return trim;
});
