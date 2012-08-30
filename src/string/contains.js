define(function () {

    /**
     * searches for a given substring
     * @version 0.1.0 (2012/08/30)
     */
    function contains(str, substring){
        return str.indexOf(substring) !== -1;
    }

    return contains;

});
