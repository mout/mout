define(function(){
    /**
    * Remove white-spaces from beginning of string.
    * @example stringUtils.ltrim('   lorem ipsum   ') -> 'lorem ipsum   '
    * @param {string} str
    * @return {string}
    * @version 0.1.0 (2011/07/20)
    */
    function ltrim(str){
        return (str || '').replace(/^\s+/g, '');
    }
    return ltrim;
});
