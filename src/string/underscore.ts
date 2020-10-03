import toString from '../lang/toString';
import slugify from './slugify';
import unCamelCase from './unCamelCase';
/**
 * Replaces spaces with underscores, split camelCase text, remove non-word chars, remove accents and convert to lower case.
 */
function underscore(str) {
    str = toString(str);
    str = unCamelCase(str);
    return slugify(str, '_');
}
export default underscore;
