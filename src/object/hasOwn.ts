/**
 * Safer Object.hasOwnProperty
 */
function hasOwn(obj: object, prop: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

export default hasOwn;
