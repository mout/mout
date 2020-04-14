/**
 * Linear interpolation.
 * IMPORTANT:will return `Infinity` if numbers overflow Number.MAX_VALUE
 */
function lerp(ratio: number, start: number, end: number): number {
    return start + (end - start) * ratio;
}

export default lerp;
