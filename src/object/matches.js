define(['./every'], function (every) {

    /**
     * checks if a object contains all given properties/values
     */
    function matches(target, props){
        return every(props, function(val, key){
            return target[key] === val;
        });
    }

    return matches;

});
