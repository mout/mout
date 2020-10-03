import isKind from './isKind';
/**
 */
function isNumber(val) {
    return isKind(val, 'Number');
}
export default isNumber;
