import findIndex from './findIndex';

/**
 * Returns first item that matches criteria
 */
function find(arr, iterator, thisObj?: any) {
    const idx = findIndex(arr, iterator, thisObj);
    return idx >= 0 ? arr[idx] : void 0;
}

export default find;
