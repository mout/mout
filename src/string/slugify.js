define(['../lang/toString', './replaceAccents', './removeNonWord', './trim'], function(toString, replaceAccents, removeNonWord, trim){
    /**
     * Convert to lower case, remove accents, remove non-word chars and
     * replace spaces with the specified delimiter.
     * Does not split camelCase text.
     */
    function slugify(str, delimiter){
        str = toString(str);

        if (delimiter == null) {
            delimiter = "-";
        }
        str = replaceAccents(str);
        str = removeNonWord(str);
        str = trim(str) //should come after removeNonWord
                .replace(/ +/g, delimiter) //replace spaces with delimiter
                .toLowerCase();
        return str;
    }
    return slugify;
});
