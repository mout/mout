define(['./replaceAccents', './removeNonWord', './trim'], function(replaceAccents, removeNonWord, trim){
    /**
     * Convert to lower case, remove accents, remove non-word chars and
     * replace spaces with hyphens.
     * Only difference from `string/hyphenate`  is that it doesn't
     * split camelCase text.
     * - ported from Miller Medeiros Eclipse Monkey Scripts
     * @example toSlug('loremIpsum dolor spéçïãl chârs') -> 'loremipsum-dolor-special-chars'
     * @see amd-utils/string/hyphenate
     * @param {string} str
     * @return {string}
     * @version 0.1.0 (2011/08/09)
     */
     function toSlug(str){
        str = replaceAccents(str);
        str = removeNonWord(str);
        str = trim(str) //should come after removeNonWord
                .replace(/ +/g, '-') //replace spaces with hyphen
                .toLowerCase();
        return str;
    }
    return toSlug;
});
