import isKind from './isKind';
/**
 */
function isRegExp(val) {
    return isKind(val, 'RegExp');
}
export default isRegExp;
