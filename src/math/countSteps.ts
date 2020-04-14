/**
 * Count number of full steps.
 */
function countSteps(val: number, step: number, overflow?: number): number {
    val = Math.floor(val / step);

    if (overflow) {
        return val % overflow;
    }

    return val;
}

export default countSteps;
