/**
 * Checks if value is inside the range.
 */
function inRange(val: number, min: number, max: number, threshold?: number) {
    threshold = threshold || 0;
    return val + threshold >= min && val - threshold <= max;
}

export default inRange;
