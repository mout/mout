import toString from '../lang/toString';

/**
 * Searches for a given substring
 */
function contains(str, substring, fromIndex) {
    str = toString(str);
    substring = toString(substring);
    return str.indexOf(substring, fromIndex) !== -1;
}

export default contains;
