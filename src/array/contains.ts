import indexOf from './indexOf';

/**
 * If array contains values.
 */
function contains(arr, val) {
    return indexOf(arr, val) !== -1;
}
export default contains;
