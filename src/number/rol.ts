/**
 * Bitwise circular shift left
 * http://en.wikipedia.org/wiki/Circular_shift
 */
function rol(val: number, shift: number): number {
    return (val << shift) | (val >> (32 - shift));
}
export default rol;
