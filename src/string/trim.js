define(['./ltrim', './rtrim'], function(ltrim, rtrim){
    /**
     * Remove white-spaces from beginning and end of string.
     */
    function trim(str, chars) {
        return ltrim(rtrim(str, chars), chars);
    }

    return trim;
});
