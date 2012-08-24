define(['../array/join'], function(join){

    /**
     * Group arguments as path segments, if any of the args is `null` or an
     * empty string it will be ignored from resulting path.
     * @version 0.3.0 (2012/08/24)
     */
    function makePath(var_args){
        var result = join(Array.prototype.slice.call(arguments), '/');
        return result.replace(/\/{2,}/g, '/');
    }

    return makePath;
});
