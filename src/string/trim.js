define(function(){
    /**
    * Remove white-spaces from beginning and end of string.
    * @example trim('   lorem ipsum   ') -> 'lorem ipsum'
    * @param {string} str
    * @return {string}
    */
    function trim(str){
        return (str || '').replace(/^\s+|\s+$/g, '');
    }
    return trim;
});
