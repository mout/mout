import isNumber from './isNumber';
import GLOBAL from './GLOBAL';

/**
 * Check if value is finite
 */
function isFinite(val) {
    let is = false;
    if (typeof val === 'string' && val !== '') {
        is = GLOBAL.isFinite(parseFloat(val));
    } else if (isNumber(val)) {
        // need to use isNumber because of Number constructor
        is = GLOBAL.isFinite(val);
    }
    return is;
}

export default isFinite;
