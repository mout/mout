define(function(){
    /**
     * Remove non-word chars.
     * @example removeNonWord('lorem! ipsum?') -> 'lorem ipsum'
     * @param {string} str
     * @return {string}
     */
    function removeNonWord(str){
        return (str || '').replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, ''); //remove non-word chars
    }
    return removeNonWord;
});
