/**
 * Gets the "kind" of value. (e.g. "String", "Number", etc)
 */
type Type =
    | 'Arguments'
    | 'Array'
    | 'Boolean'
    | 'Date'
    | 'Function'
    | 'Null'
    | 'Number'
    | 'Object'
    | 'RegExp'
    | 'String'
    | 'Symbol'
    | 'Undefined';

function kindOf(val: any): Type {
    return Object.prototype.toString.call(val).slice(8, -1) as Type;
}
export default kindOf;
