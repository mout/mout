define(function(){
    /**
     * Add space between camelCase text.
     * @example unCamelCase('loremIpsumDolor') -> 'lorem ipsum dolor'
     * @param {string} str
     * @return {string}
     */
    function unCamelCase(str){
        return (str || '').replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2').toLowerCase(); //add space between camelCase text
    }
    return unCamelCase;
});
