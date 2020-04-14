import MIN_INT from '../number/MIN_INT';
import MAX_INT from '../number/MAX_INT';
import rand from './rand';

/**
 * Gets random integer inside range or snap to min/max values.
 */
function randInt(min, max) {
    min = min == null ? MIN_INT : ~~min;
    max = max == null ? MAX_INT : ~~max;
    // can't be max + 0.5 otherwise it will round up if `rand`
    // returns `max` causing it to overflow range.
    // -0.5 and + 0.49 are required to avoid bias caused by rounding
    return Math.round(rand(min - 0.5, max + 0.499999999999));
}

export default randInt;
