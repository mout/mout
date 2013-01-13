define(['./truncate'], function (truncate) {
    /**
     * Truncate string at full words.
     */
     function crop(str, maxChars, append) {
        return truncate(str, maxChars, append, true);
     }

     return crop;
});
