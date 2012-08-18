define(['./slugify', './unCamelCase'], function(slugify, unCamelCase){
    /**
     * Replaces spaces with underscores, split camelCase text, remove non-word chars, remove accents and convert to lower case.
     * @version 0.1.0
     */
    function underscore(str){
        str = unCamelCase(str);
        return slugify(str, "_");
    }
    return underscore;
});
