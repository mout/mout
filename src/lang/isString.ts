import isKind from './isKind';
/**
 */
function isString(val) {
    return isKind(val, 'String');
}
export default isString;
