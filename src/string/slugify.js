define(['./replaceAccents', './removeNonWord', './trim'], function(replaceAccents, removeNonWord, trim){
    /**
     * Convert to lower case, remove accents, remove non-word chars and
     * replace spaces with the specified delimeter.
     * Does not split camelCase text.
     * - ported from Miller Medeiros Eclipse Monkey Scripts
     * @example slugify('loremIpsum dolor spéçïãl chârs', '_') -> 'loremipsum_dolor_special_chars'
     * @param {string} str
     * @param {string} [delimeter="-"]
     * @return {string}
     * @version 0.2.0 (2012/08/17)
     */
    function slugify(str, delimeter){
        if (delimeter == null) {
            delimeter = "-";
        }
        str = replaceAccents(str);
        str = removeNonWord(str);
        str = trim(str) //should come after removeNonWord
                .replace(/ +/g, delimeter) //replace spaces with delimeter
                .toLowerCase();
        return str;
    }
    return slugify;
});
