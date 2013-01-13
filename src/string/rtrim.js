define(function(){
    /**
    * Remove white-spaces from end of string.
    * @example stringUtils.rtrim('   lorem ipsum   ') -> '   lorem ipsum'
    * @param {string} str
    * @return {string}
    */
    function rtrim(str){
        return (str || '').replace(/\s+$/g, '');
    }
    return rtrim;
});
