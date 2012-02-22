define(['./createObject'], function(createObject){

    /**
    * Inherit prototype from another Object.
    * - inspired by Nicholas Zackas <http://nczonline.net> Solution
    * @param {object} child Child object
    * @param {object} parent    Parent Object
    * @version 0.1.0 (2011/02/18)
    */
    function inheritPrototype(child, parent){
        var p = createObject(parent.prototype);
        p.constructor = child;
        child.prototype = p;
    }

    return inheritPrototype;
});
