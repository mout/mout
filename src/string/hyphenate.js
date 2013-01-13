define(['./slugify', './unCamelCase'], function(slugify, unCamelCase){
    /**
    * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
    * @example hyphenate('loremIpsum dolor spéçïãl chârs') -> 'lorem-ipsum-dolor-special-chars'
    */
    function hyphenate(str){
        str = unCamelCase(str);
        return slugify(str, "-");
    }
    return hyphenate;
});
