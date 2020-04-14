import toString from '../lang/toString';
import WHITE_SPACES from './WHITE_SPACES';
/**
 * Remove chars from end of string.
 */
function rtrim(str, chars) {
    str = toString(str);
    chars = chars || WHITE_SPACES;

    let end = str.length - 1;
    const charLen = chars.length;
    let found = true;
    let i;
    let c;

    while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                end--;
                break;
            }
        }
    }

    return end >= 0 ? str.substring(0, end + 1) : '';
}

export default rtrim;
