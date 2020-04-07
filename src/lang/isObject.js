import isKind from './isKind';
    /**
     */
    function isObject(val) {
        return isKind(val, 'Object');
    }
    export default isObject;

