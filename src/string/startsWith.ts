import toString from '../lang/toString';
/**
 * Checks if string starts with specified prefix.
 */
function startsWith(str, prefix) {
    str = toString(str);
    prefix = toString(prefix);

    return str.indexOf(prefix) === 0;
}

export default startsWith;
