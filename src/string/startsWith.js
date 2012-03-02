define(function () {
    /**
    * Checks if string starts with specified prefix.
    * @example startsWith('lorem ipsum', 'ipsum') -> false
    * @example startsWith('lorem ipsum', 'lorem') -> true
    * @param {string} str
    * @param {string} prefix
    * @return {bool}
    * @version 0.1.0 (2012/03/01)
    */
    function startsWith(str, prefix) {
        str = (str || '');
        prefix = (prefix || '');
        return str.indexOf(prefix) === 0;
    }
    return startsWith;
});
