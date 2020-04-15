import now from '../time/now';

/**
 */
function throttle(fn, delay) {
    let context;
    let timeout;
    let result;
    let args;
    let diff;
    let prevCall = 0;
    function delayed() {
        prevCall = now();
        timeout = null;
        result = fn.apply(context, args);
    }
    function throttled() {
        context = this;
        args = arguments;
        diff = delay - (now() - prevCall);
        if (diff <= 0) {
            clearTimeout(timeout);
            delayed();
        } else if (!timeout) {
            timeout = setTimeout(delayed, diff);
        }
        return result;
    }
    throttled.cancel = function() {
        clearTimeout(timeout);
    };
    return throttled;
}

export default throttle;
