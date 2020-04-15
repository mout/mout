import toString from '../lang/toString';
import toInt from '../number/toInt';

/**
 * Repeat string n times
 */
function repeat(str, n) {
    let result = '';
    str = toString(str);
    n = toInt(n);
    if (n < 1) {
        return '';
    }
    while (n > 0) {
        if (n % 2) {
            result += str;
        }
        n = Math.floor(n / 2);
        str += str;
    }
    return result;
}

export default repeat;
