import toString from '../lang/toString';
import slugify from './slugify';
import unCamelCase from './unCamelCase';
/**
 * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
 */
function hyphenate(str) {
    str = toString(str);
    str = unCamelCase(str);
    return slugify(str, '-');
}

export default hyphenate;
