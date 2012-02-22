define(function(){
    /**
     * Group arguments as path segments, if any of the args is `null` it
     * will be ignored from resulting path.
     * @example makePath('lorem', 'ipsum', null, 'dolor') -> 'lorem/ipsum/dolor'
     * @param {...string} args
     * @return {string}
     * @version 0.1.0 (2011/07/28)
     */
    function makePath(args){
        args = Array.prototype.slice.call(arguments);
        return args.join('/').replace(/\/+/g, '/');
    }
    return makePath;
});
