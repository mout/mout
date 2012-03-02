define(function () {
    /**
    * Checks if string ends with specified suffix.
    * @example endsWith('lorem ipsum', 'ipsum') -> true
    * @example endsWith('lorem ipsum', 'lorem') -> false
    * @param {string} str
    * @param {string} suffix
    * @return {bool}
    * @version 0.1.0 (2012/03/01)
    */
    function endsWith(str, suffix) {
        str = (str || '');
        suffix = (suffix || '');
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    return endsWith;
});
