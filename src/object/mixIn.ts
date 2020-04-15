import forOwn from './forOwn';

/**
 * Combine properties from all the objects into first one.
 * - This method affects target object in place, if you want to create a new Object pass an empty
 * object as first param.
 * @param {object} target    Target Object
 * @param {...object} objects    Objects to be combined (0...n objects).
 * @return {object} Target Object.
 */
function mixIn<T, M>(
    target: Record<string, T>,
    ...objects: Array<Record<string, T>>
): Record<string, T> {
    let i = 0;
    const n = objects.length;
    let obj: Record<string, T>;
    while (++i < n) {
        obj = objects[i];
        if (obj != null) {
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    target[key] = obj[key];
                }
            }
            forOwn(obj, copyProp, target);
        }
    }
    return target;
}

function copyProp(this: Record<string, any>, val: any, key: string) {
    // eslint-disable-next-line no-invalid-this
    this[key] = val;
}

export default mixIn;
