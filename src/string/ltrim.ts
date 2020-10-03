import toString from '../lang/toString';
import WHITE_SPACES from './WHITE_SPACES';
/**
 * Remove chars from beginning of string.
 */
function ltrim(str, chars) {
    str = toString(str);
    chars = chars || WHITE_SPACES;

    let start = 0;
    const len = str.length;
    const charLen = chars.length;
    let found = true;
    let i;
    let c;

    while (found && start < len) {
        found = false;
        i = -1;
        c = str.charAt(start);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                start++;
                break;
            }
        }
    }

    return start >= len ? '' : str.substr(start, len);
}

export default ltrim;
