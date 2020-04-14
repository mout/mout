import toString from '../lang/toString';
/**
 * Checks if string ends with specified suffix.
 */
function endsWith(str, suffix) {
    str = toString(str);
    suffix = toString(suffix);

    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

export default endsWith;
