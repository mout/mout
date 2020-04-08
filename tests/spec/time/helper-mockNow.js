import now from '../../../src/time/now';

    var time;
    var original = now.get;
    var interval;
    var _exports = {};

    _exports.start = function (ts) {
        time = ts != null? ts : 1382023145920;
        now.get = function() {
            return time;
        };
        interval = setInterval(function(){
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
