define(['../math/clamp'], function (clamp) {

    /**
     * Inserts a string at a given index.
     */
    function insert(string, index, partial){
        index = clamp(index, 0, string.length);

        return string.substr(0, index) + partial + string.substr(index);
    }

    return insert;

});
