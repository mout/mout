/**
 * Round number to a specific radix
 */
function round(value: number, radix?: number) {
    radix = radix || 1; // default round 1
    return Math.round(value / radix) * radix;
}

export default round;
