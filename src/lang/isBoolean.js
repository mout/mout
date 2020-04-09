import isKind from './isKind';
/**
 */
function isBoolean(val) {
    return isKind(val, 'Boolean');
}
export default isBoolean;
