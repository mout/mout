define(['./slugify', './unCamelCase'], function(slugify, unCamelCase){
    /**
    * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
    * @example hyphenate('loremIpsum dolor spéçïãl chârs') -> 'lorem-ipsum-dolor-special-chars'
    * @version 0.2.0 (2012/08/17)
    */
    function hyphenate(str){
        str = unCamelCase(str);
        return slugify(str, "-");
    }
    return hyphenate;
});
