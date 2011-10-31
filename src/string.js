define(function(require){

    /**
     * String utilities.
     * @exports amd-utils/string
     * @author Miller Medeiros
     * @version 0.3.0 (2011/10/31)
     */
    return {
        camelCase      : require('./string/camelCase'),
        crop           : require('./string/crop'),
        hyphenate      : require('./string/hyphenate'),
        ltrim          : require('./string/ltrim'),
        makePath       : require('./string/makePath'),
        pascalCase     : require('./string/pascalCase'),
        properCase     : require('./string/properCase'),
        removeNonASCII : require('./string/removeNonASCII'),
        removeNonWord  : require('./string/removeNonWord'),
        replaceAccents : require('./string/replaceAccents'),
        rtrim          : require('./string/rtrim'),
        sentenceCase   : require('./string/sentenceCase'),
        stripHtmlTags  : require('./string/stripHtmlTags'),
        toSlug         : require('./string/toSlug'),
        trim           : require('./string/trim'),
        truncate       : require('./string/truncate'),
        typecast       : require('./string/typecast'),
        unCamelCase    : require('./string/unCamelCase'),
        unHyphenate    : require('./string/unHyphenate')
    };

});
