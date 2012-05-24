define(function () {

    /**
     * Unescapes HTML special chars
     * @version 0.1.0 (2012/05/24)
     */
    function unescapeHtml(str){
        str = (str || '')
                    .replace(/&amp;/g , '&')
                    .replace(/&lt;/g  , '<')
                    .replace(/&gt;/g  , '>')
                    .replace(/&#39;/g , "'")
                    .replace(/&quot;/g, '"');
        return str;
    }

    return unescapeHtml;

});
