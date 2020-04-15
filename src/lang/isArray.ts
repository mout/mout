import isKind from './isKind';
/**
 */
const isArray =
    Array.isArray ||
    function(val) {
        return isKind(val, 'Array');
    };
export default isArray;
