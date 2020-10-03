import toString from '../lang/toString';
/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
    str = toString(str);
    return str.toUpperCase();
}
export default upperCase;
