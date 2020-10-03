import findLastIndex from './findLastIndex';

/**
 * Returns last item that matches criteria
 */
function findLast(arr, iterator, thisObj?: any) {
    const idx = findLastIndex(arr, iterator, thisObj);
    return idx >= 0 ? arr[idx] : void 0;
}

export default findLast;
