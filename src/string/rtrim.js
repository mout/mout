define(function(){
    /**
    * Remove white-spaces from end of string.
    * @example stringUtils.rtrim('   lorem ipsum   ') -> '   lorem ipsum'
    * @param {string} str
    * @return {string}
    * @version 0.1.0 (2011/07/20)
    */
    function rtrim(str){
        return (str || '').replace(/\s+$/g, '');
    }
    return rtrim;
});
