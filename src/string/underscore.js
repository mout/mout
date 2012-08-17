define(['./toSlug', './unCamelCase'], function(toSlug, unCamelCase){
    /**
     * Replaces spaces with underscores, split camelCase text, remove non-word chars, remove accents and convert to lower case.
     * @see amd-utils/string/toSlug
     * @param {string} str
     * @return {string}
     * @version 0.1.0
     */
    function underscore(str){
        str = unCamelCase(str);
        return toSlug(str, "_");
    }
    return underscore;
});
