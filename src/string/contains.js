define(function () {

    /**
     * searches for a given substring
     */
    function contains(str, substring){
        return str.indexOf(substring) !== -1;
    }

    return contains;

});
