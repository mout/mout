define(function () {
    /**
    * Checks if string ends with specified suffix.
    * @example endsWith('lorem ipsum', 'ipsum') -> true
    * @example endsWith('lorem ipsum', 'lorem') -> false
    * @param {string} str
    * @param {string} suffix
    * @return {bool}
    */
    function endsWith(str, suffix) {
        str = (str || '');
        suffix = (suffix || '');
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    return endsWith;
});
