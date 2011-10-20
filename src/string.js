define(function(require){

    /**
     * String utilities.
     * @exports amd-utils/string
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/20)
     */
    return {
        trim           : require('./string/trim'),
        ltrim          : require('./string/ltrim'),
        rtrim          : require('./string/rtrim'),
        truncate       : require('./string/truncate'),
        hyphenate      : require('./string/hyphenate'),
        unHyphenate    : require('./string/unHyphenate'),
        toSlug         : require('./string/toSlug'),
        camelCase      : require('./string/camelCase'),
        unCamelCase    : require('./string/unCamelCase'),
        properCase     : require('./string/properCase'),
        sentenceCase   : require('./string/sentenceCase'),
        makePath       : require('./string/makePath'),
        replaceAccents : require('./string/replaceAccents'),
        removeNonWord  : require('./string/removeNonWord'),
        removeNonASCII : require('./string/removeNonASCII'),
        stripHtmlTags  : require('./string/stripHtmlTags')
    };

});
