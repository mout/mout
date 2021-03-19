define(['./namespace'], function (namespace) {

    /**
     * set "nested" object property
     */
    function set(obj, prop, val){
        // prototype pollution mitigation
        if(prop.includes('__proto__') || prop.includes('prototype') || prop.includes('constructor')) {
            return false;
        }
        var parts = (/^(.+)\.(.+)$/).exec(prop);
        if (parts){
            namespace(obj, parts[1])[parts[2]] = val;
        } else {
            obj[prop] = val;
        }
    }

    return set;

});
