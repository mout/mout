import toString from '../lang/toString';
import replaceAccents from './replaceAccents';
import removeNonWord from './removeNonWord';
import trim from './trim';
/**
 * Convert to lower case, remove accents, remove non-word chars and
 * replace spaces with the specified delimeter.
 * Does not split camelCase text.
 */
function slugify(str, delimeter) {
    str = toString(str);

    if (delimeter == null) {
        delimeter = '-';
    }
    str = replaceAccents(str);
    str = removeNonWord(str);
    str = trim(str) // should come after removeNonWord
        .replace(/ +/g, delimeter) // replace spaces with delimeter
        .toLowerCase();
    return str;
}
export default slugify;
