import random from './random';
import MIN_INT from '../number/MIN_INT';
import MAX_INT from '../number/MAX_INT';

/**
 * Returns random number inside range
 */
function rand(min: number, max: number): number {
    min = min == null ? MIN_INT : min;
    max = max == null ? MAX_INT : max;
    return min + (max - min) * random();
}

export default rand;
