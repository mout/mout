define(['./WHITE_SPACES', './ltrim', './rtrim'], function(WHITE_SPACES, ltrim, rtrim){
    /**
     * Remove white-spaces from beginning and end of string.
     */
    function trim(str, chars) {
        chars = chars || WHITE_SPACES;
        return ltrim(rtrim(str, chars), chars);
    }

    return trim;
});
