/**
 * Loops value inside range.
 */
function loop(val: number, min: number, max: number): number {
    return val < min ? max : val > max ? min : val;
}

export default loop;
