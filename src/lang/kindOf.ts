/**
 * Gets the "kind" of value. (e.g. "String", "Number", etc)
 */
type Type =
    | 'Undefined'
    | 'Null'
    | 'Object'
    | 'Array'
    | 'Boolean'
    | 'Function'
    | 'Date'
    | 'RegExp'
    | 'Symbol'
    | 'Number';

function kindOf(val: any): Type {
    return Object.prototype.toString.call(val).slice(8, -1) as Type;
}
export default kindOf;
