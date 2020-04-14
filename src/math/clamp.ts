/**
 * Clamps value inside range.
 */
function clamp(val: number, min: number, max: number): number {
    return val < min ? min : val > max ? max : val;
}

export default clamp;
