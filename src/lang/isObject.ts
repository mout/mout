import isKind from './isKind';
/**
 */
function isObject(val): val is Object {
    return isKind(val, 'Object');
}
export default isObject;
