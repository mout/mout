define(['./namespace'], function (namespace) {

    /**
     * set "nested" object property
     */
    function set(obj, prop, val){
        var stringifiedProp = prop.toString();
        // prototype pollution mitigation
        if(stringifiedProp.includes('__proto__') || stringifiedProp.includes('prototype') || stringifiedProp.includes('constructor')) {
            return false;
        }
        var parts = (/^(.+)\.(.+)$/).exec(stringifiedProp);
        if (parts){
            namespace(obj, parts[1])[parts[2]] = val;
        } else {
            obj[stringifiedProp] = val;
        }
    }

    return set;

});
