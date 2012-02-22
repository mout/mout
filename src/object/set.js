define(['./namespace'], function (namespace) {

    /**
     * set "nested" object property
     * @version 0.1.0 (2012/01/30)
     */
    function set(obj, prop, val){
        var parts = (/^(.+)\.(.+)$/).exec(prop);
        if (parts){
            namespace(obj, parts[1])[parts[2]] = val;
        } else {
            obj[prop] = val;
        }
    }

    return set;

});
