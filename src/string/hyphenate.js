define(['./toSlug', './unCamelCase'], function(toSlug, unCamelCase){
    /**
    * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
    * @example hyphenate('loremIpsum dolor spéçïãl chârs') -> 'lorem-ipsum-dolor-special-chars'
    * @see amd-utils/string/toSlug
    * @param {string} str
    * @return {string}
    * @version 0.1.1 (2012/08/17)
    */
    function hyphenate(str){
        str = unCamelCase(str);
        return toSlug(str, "-");
    }
    return hyphenate;
});
