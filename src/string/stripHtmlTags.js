define(function(){
    /**
    * Remove HTML tags from string.
    * @example stripHtmlTags('<p><em>lorem</em> <strong>ipsum</strong></p>') -> 'lorem ipsum'
    * @param {string} str
    * @return {string}
    */
    function stripHtmlTags(str){
        return (str || '').replace(/<[^>]*>/g, '');
    }
    return stripHtmlTags;
});
