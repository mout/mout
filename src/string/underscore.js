define(['./slugify', './unCamelCase'], function(slugify, unCamelCase){
    /**
     * Replaces spaces with underscores, split camelCase text, remove non-word chars, remove accents and convert to lower case.
     */
    function underscore(str){
        str = unCamelCase(str);
        return slugify(str, "_");
    }
    return underscore;
});
