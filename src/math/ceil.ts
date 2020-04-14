/**
 * Round value up with a custom radix.
 */
function ceil(val: number, step?: number): number {
    step = Math.abs(step || 1);
    return Math.ceil(val / step) * step;
}

export default ceil;
