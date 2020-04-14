import toNumber from '../lang/toNumber';

/**
 * Get sign of the value.
 */
function sign(val: number): number {
    const num = toNumber(val);
    if (num === 0) return num; // +0 and +0 === 0
    if (isNaN(num)) return num; // NaN
    return num < 0 ? -1 : 1;
}

export default sign;
