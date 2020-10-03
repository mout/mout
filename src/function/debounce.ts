/**
 * Debounce callback execution
 */
function debounce(fn, threshold, isAsap) {
    let timeout;
    let result;
    function debounced() {
        const args = arguments;
        const context = this;
        function delayed() {
            if (!isAsap) {
                result = fn.apply(context, args);
            }
            timeout = null;
        }
        if (timeout) {
            clearTimeout(timeout);
        } else if (isAsap) {
            result = fn.apply(context, args);
        }
        timeout = setTimeout(delayed, threshold);
        return result;
    }
    debounced.cancel = function() {
        clearTimeout(timeout);
    };
    return debounced;
}

export default debounce;
