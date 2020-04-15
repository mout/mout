import kindOf from './kindOf';
/**
 * Check if value is from a specific "kind".
 */
function isKind(val, kind) {
    return kindOf(val) === kind;
}
export default isKind;
