define(function () {

    /**
     * Escapes a string for insertion into HTML.
     * @version 0.1.0 (2012/05/24)
     */
    function escapeHtml(str){
        str = (str || '')
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/'/g, '&#39;')
                    .replace(/"/g, '&quot;');
        return str;
    }

    return escapeHtml;

});
