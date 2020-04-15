/**
 * ES6 Number.isNaN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 */
function isNaN(val: unknown): val is number {
    return typeof val === 'number' && val != val;
}

export default isNaN;
