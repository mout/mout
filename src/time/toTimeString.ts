import countSteps from '../math/countSteps';
import pad from '../number/pad';

const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

/**
 * Format timestamp into a time string.
 */
function toTimeString(ms) {
    const h = ms < HOUR ? 0 : countSteps(ms, HOUR);
    const m = ms < MINUTE ? 0 : countSteps(ms, MINUTE, 60);
    const s = ms < SECOND ? 0 : countSteps(ms, SECOND, 60);
    let str = '';

    str += h ? h + ':' : '';
    str += pad(m, 2) + ':';
    str += pad(s, 2);

    return str;
}
export default toTimeString;
