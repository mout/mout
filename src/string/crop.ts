import toString from '../lang/toString';
import truncate from './truncate';
/**
 * Truncate string at full words.
 */
function crop(str, maxChars, append) {
    str = toString(str);
    return truncate(str, maxChars, append, true);
}

export default crop;
