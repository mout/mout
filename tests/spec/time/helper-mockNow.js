import now from '../../../time/now';

let time;
const original = now.get;
let interval;
const _exports = {};

_exports.start = function(ts) {
    time = ts != null ? ts : 1382023145920;
    now.get = function() {
        return time;
    };
    interval = setInterval(function() {
        time += 1;
    }, 1);
};

_exports.end = function() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    now.get = original;
};

export default _exports;
