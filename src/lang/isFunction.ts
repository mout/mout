import isKind from './isKind';
/**
 */
function isFunction(val) {
    return isKind(val, 'Function');
}
export default isFunction;
