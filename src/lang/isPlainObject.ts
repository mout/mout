/**
 * Checks if the value is created by the `Object` constructor.
 */
function isPlainObject(value: any): value is Object {
    return !!value && typeof value === 'object' && value.constructor === Object;
}

export default isPlainObject;
