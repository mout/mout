/**
 * Check if value is close to target.
 */
function isNear(val, target, threshold) {
    return Math.abs(val - target) <= threshold;
}
export default isNear;
