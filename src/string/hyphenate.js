define(['./toSlug', './unCamelCase'], function(toSlug, unCamelCase){
    /**
    * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
    * @example hyphenate('loremIpsum dolor spéçïãl chârs') -> 'lorem-ipsum-dolor-special-chars'
    * @see amd-utils/string/toSlug
    * @param {string} str
    * @return {string}
    * @version 0.1.0 (2011/08/09)
    */
    function hyphenate(str){
        return toSlug( unCamelCase(str) );
    }
    return hyphenate;
});
