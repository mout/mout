define(['./forOwn'], function(forOwn){

    /**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    * @version 0.1.3 (2012/08/11)
    */
    function mixIn(target, objects){
        var i = 1,
            obj;
        while(obj = arguments[i++]){
            forOwn(obj, copyProp, target);
        }
        return target;
    }

    function copyProp(val, key){
        this[key] = val;
    }

    return mixIn;
});
