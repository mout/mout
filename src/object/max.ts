import arrMax from '../array/max';
import values from './values';

/**
 * Returns maximum value inside object.
 */
function max(obj: object, compareFn: ) {
    return arrMax(values(obj), compareFn);
}

export default max;
