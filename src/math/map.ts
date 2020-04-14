import lerp from './lerp';
import norm from './norm';
/**
 * Maps a number from one scale to another.
 * @example map(3, 0, 4, -1, 1) -> 0.5
 */
function map(val: number, min1: number, max1: number, min2: number, max2: number): number {
    return lerp(norm(val, min1, max1), min2, max2);
}
export default map;
