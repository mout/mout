/**
 * Floor value to full steps.
 */
function floor(val: number, step?: number): number {
    step = Math.abs(step || 1);
    return Math.floor(val / step) * step;
}
export default floor;
