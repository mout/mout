define(['../array/filter'], function(filter){

    /**
     * Group arguments as path segments, if any of the args is `null` or an
     * empty string it will be ignored from resulting path.
     * @version 0.2.0 (2012/05/30)
     */
    function makePath(var_args){
        var result = filter(Array.prototype.slice.call(arguments), isValidString);
        return result.join('/').replace(/\/{2,}/g, '/');
    }

    function isValidString(val) {
        return (typeof val === 'string' && val !== '');
    }

    return makePath;

});
