import isKind from './isKind';
/**
 */
var isArray =
    Array.isArray ||
    function(val) {
        return isKind(val, 'Array');
    };
export default isArray;
