define(['../lang/toString'], function(toString) {

    /**
     * Searches for a given substring
     */
    function contains(str, substring){
        str = toString(str);
        substring = toString(substring);

        return str.indexOf(substring) !== -1;
    }

    return contains;

});
