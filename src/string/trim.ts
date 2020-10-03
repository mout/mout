import toString from '../lang/toString';
import WHITE_SPACES from './WHITE_SPACES';
import ltrim from './ltrim';
import rtrim from './rtrim';
/**
 * Remove white-spaces from beginning and end of string.
 */
function trim(str, chars?: string[]) {
    str = toString(str);
    chars = chars || WHITE_SPACES;
    return ltrim(rtrim(str, chars), chars);
}

export default trim;
