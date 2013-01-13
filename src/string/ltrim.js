define(function(){
    /**
    * Remove white-spaces from beginning of string.
    * @example stringUtils.ltrim('   lorem ipsum   ') -> 'lorem ipsum   '
    * @param {string} str
    * @return {string}
    */
    function ltrim(str){
        return (str || '').replace(/^\s+/g, '');
    }
    return ltrim;
});
