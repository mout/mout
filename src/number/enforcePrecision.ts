import toNumber from '../lang/toNumber';

/**
 * Enforce a specific amount of decimal digits and also fix floating
 * point rounding issues.
 */
function enforcePrecision(val: any, nDecimalDigits: number) {
    val = toNumber(val);
    const pow = Math.pow(10, nDecimalDigits);
    return +(Math.round(val * pow) / pow).toFixed(nDecimalDigits);
}

export default enforcePrecision;
