/**
 * Check if value is close to target.
 */
function isNear(val: number, target: number, threshold: number): boolean {
    return Math.abs(val - target) <= threshold;
}
export default isNear;
