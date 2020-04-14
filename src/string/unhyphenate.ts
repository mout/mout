import toString from '../lang/toString';
/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */
function unhyphenate(str) {
    str = toString(str);
    return str.replace(/(\w)(-)(\w)/g, '$1 $3');
}
export default unhyphenate;
