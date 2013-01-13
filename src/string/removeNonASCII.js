define(function(){
    /**
    * Remove non-printable ASCII chars
    * @param {string} str
    * @return {string}
    */
    function removeNonASCII(str){
        return (str || '').replace(/[^\x20-\x7E]/g, ''); //matches non-printable ASCII chars - http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    }
    return removeNonASCII;
});
