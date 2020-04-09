import toString from '../lang/toString';
/**
 * Remove HTML tags from string.
 */
function stripHtmlTags(str) {
    str = toString(str);

    return str.replace(/<[^>]*>/g, '');
}
export default stripHtmlTags;
