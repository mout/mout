import arrMax from '../array/max';
import values from './values';

/**
 * Returns maximum value inside object.
 */
function max<T>(obj: Record<string, T>, compareFn: <T>(a: T, b: T) => number): T | undefined {
    return arrMax(values(obj), compareFn);
}

export default max;
