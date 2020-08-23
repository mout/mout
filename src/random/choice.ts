import randInt from './randInt';

/**
 * Returns a random element from the supplied arguments
 * or from the array (if single argument is an array).
 */
function choice<T>(...items: T[] | T[][]) {
    const target: T[] =
        items.length === 1 && Array.isArray(items[0]) ? (items[0] as T[]) : (items as T[]);
    return target[randInt(0, target.length - 1)];
}

export default choice;
