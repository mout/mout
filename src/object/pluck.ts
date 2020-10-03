import map from './map';
import prop from '../function/prop';

/**
 * Extract a list of property values.
 */
function pluck(obj, propName) {
    return map(obj, prop(propName));
}

export default pluck;
