import isKind from './isKind';
/**
 */
function isDate(val): val is Date {
    return isKind(val, 'Date');
}
export default isDate;
