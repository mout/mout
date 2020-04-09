import lpad from '../string/lpad';
import toNumber from '../lang/toNumber';

/**
 * Add padding zeros if n.length < minLength.
 */
function pad(n, minLength, char) {
    n = toNumber(n);
    return lpad('' + n, minLength, char || '0');
}

export default pad;
