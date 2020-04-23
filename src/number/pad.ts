import lpad from '../string/lpad';
import toNumber from '../lang/toNumber';

/**
 * Add padding zeros if n.length < minLength.
 */
function pad(n: number | string, minLength: number, char?: string): string {
    n = toNumber(n);
    return lpad(`${n}`, minLength, char || '0');
}

export default pad;
