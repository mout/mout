import slice from '../array/slice';

/**
 * internal method used to create other collection modules.
 */
function makeCollectionMethod(arrMethod, objMethod, defaultReturn) {
    return function() {
        const args = slice(arguments);
        if (args[0] == null) {
            return defaultReturn;
        }
        // array-like is treated as array
        return typeof args[0].length === 'number'
            ? arrMethod(...args)
            : objMethod(...args);
    };
}

export default makeCollectionMethod;
