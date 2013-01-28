define(['../lang/toArray'], function (toArray) {

    /**
     * Replace string(s) with the replacement(s) in the source.
     */
    function replace(str, search, replace) {
        search = toArray(search);
        replace= toArray(replace);

        if (replace.length !== 1 && search.length !== replace.length) {
            throw new Error('Unequal number of searches and replacements');
        }

        var i = -1;
        while (++i < search.length) {
            // Use the first replacement for all searches if only one
            // replacement is provided
            str = str.replace(
                search[i],
                replace[(replace.length === 1) ? 0 : i]);
        }

        return str;
    }

    return replace;

});
