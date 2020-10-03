import map from './map';

/**
 * Extract a list of property values.
 */
function pluck(arr, propName) {
    return map(arr, propName);
}

export default pluck;
