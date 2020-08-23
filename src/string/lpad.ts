import toString from '../lang/toString';
import repeat from './repeat';

/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */
function lpad(str, minLen, ch = ' ') {
    str = toString(str);

    return str.length < minLen ? repeat(ch, minLen - str.length) + str : str;
}

export default lpad;
