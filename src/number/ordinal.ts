import toInt from './toInt';
import nth from './nth';

/**
 * converts number into ordinal form (1st, 2nd, 3rd, 4th, ...)
 */
function ordinal(n: number) {
    n = toInt(n);
    return n + nth(n);
}

export default ordinal;
