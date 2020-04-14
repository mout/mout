import isNumber from './isNumber';

/**
 * Check if value is an integer
 */
function isInteger(val) {
    return isNumber(val) && val % 1 === 0;
}

export default isInteger;
