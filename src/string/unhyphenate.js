define(function(){
    /**
     * Replaces hyphens with spaces. (only hyphens between word chars)
     * @example unhyphenate('lorem-ipsum-dolor') -> 'lorem ipsum dolor'
     * @version 0.1.0 (2011/08/09)
     */
    function unhyphenate(str){
        return (str || '').replace(/(\w)(-)(\w)/g, '$1 $3'); //convert hyphens between word chars to spaces
    }
    return unhyphenate;
});
