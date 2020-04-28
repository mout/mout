/**
 * Gets normalized ratio of value inside range.
 */
function norm(val: number, min: number, max: number): number {
    if (val < min || val > max) {
        throw new RangeError(`value (${val}) must be between ${min} and ${max}`);
    }

    return val === max ? 1 : (val - min) / (max - min);
}

export default norm;
