import exports from 'exports';
import now from 'mout/time/now';

    var time;
    var original = now.get;
    var interval;

    exports.start = function (ts) {
        time = ts != null? ts : 1382023145920;
        now.get = function() {
            return time;
        };
        interval = setInterval(function(){
            time += 1;
        }, 1);
    };

    exports.end = function() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
        now.get = original;
    };


