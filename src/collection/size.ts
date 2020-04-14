import isArray from '../lang/isArray';
import objSize from '../object/size';

/**
 * Get collection size
 */
function size(list) {
    if (!list) {
        return 0;
    }
    if (isArray(list)) {
        return list.length;
    }
    return objSize(list);
}

export default size;
