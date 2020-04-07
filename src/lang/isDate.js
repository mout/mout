import isKind from './isKind';
    /**
     */
    function isDate(val) {
        return isKind(val, 'Date');
    }
    export default isDate;

