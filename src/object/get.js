define(function () {

    /**
     * set "nested" object property
     * @author Miller Medeiros
     * @version 0.1.0 (2012/01/30)
     */
    function get(obj, prop){
        var split = prop.split('.'),
            last = split.pop();

        while (prop = split.shift()) {
            obj = obj[prop];
            if (typeof obj !== 'object') return;
        }

        return obj[last];
    }

    return get;

});
