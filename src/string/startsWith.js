define(function () {
    /**
    * Checks if string starts with specified prefix.
    * @example startsWith('lorem ipsum', 'ipsum') -> false
    * @example startsWith('lorem ipsum', 'lorem') -> true
    * @param {string} str
    * @param {string} prefix
    * @return {bool}
    */
    function startsWith(str, prefix) {
        str = (str || '');
        prefix = (prefix || '');
        return str.indexOf(prefix) === 0;
    }
    return startsWith;
});
