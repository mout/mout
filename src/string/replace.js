define(['../lang/toString', '../lang/toArray'], function (toString, toArray) {

    /**
     * Replace string(s) with the replacement(s) in the source.
     */
    function replace(str, search, replace) {
        str = toString(str);
        search = toArray(search);
        replace = toArray(replace);

        var searchLength = search.length,
            replaceLength = replace.length;

        if (replaceLength !== 1 && searchLength !== replace.length) {
            throw new Error('Unequal number of searches and replacements');
        }

        var i = -1;
        while (++i < searchLength) {
            // Use the first replacement for all searches if only one
            // replacement is provided
            str = str.replace(
                search[i],
                replace[(replaceLength === 1) ? 0 : i]);
        }

        return str;
    }

    return replace;

});
