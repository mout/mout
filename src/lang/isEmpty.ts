import forOwn from '../object/forOwn';
import isArray from './isArray';

function isEmpty(val) {
    if (val == null) {
        // typeof null == 'object' so we check it first
        return true;
    } else if (typeof val === 'string' || isArray(val)) {
        return !val.length;
    } else if (typeof val === 'object') {
        let result = true;
        forOwn(val, function() {
            result = false;
            return false; // break loop
        });
        return result;
    } else {
        return true;
    }
}

export default isEmpty;
