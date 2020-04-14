import toString from '../lang/toString';
/**
 * "Safer" String.toLowerCase()
 */
function lowerCase(str) {
    str = toString(str);
    return str.toLowerCase();
}

export default lowerCase;
