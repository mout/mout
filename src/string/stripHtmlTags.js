define(function(){
    /**
    * Remove HTML tags from string.
    * @example stripHtmlTags('<p><em>lorem</em> <strong>ipsum</strong></p>') -> 'lorem ipsum'
    * @param {string} str
    * @return {string}
    * @version 0.1.0 (2011/07/20)
    */
    function stripHtmlTags(str){
        return (str || '').replace(/<[^>]*>/g, '');
    }
    return stripHtmlTags;
});
