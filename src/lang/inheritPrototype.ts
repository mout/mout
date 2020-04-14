import createObject from './createObject';

/**
 * Inherit prototype from another Object.
 * - inspired by Nicholas Zackas <http://nczonline.net> Solution
 * @param {object} child Child object
 * @param {object} parent    Parent Object
 */
function inheritPrototype(child, parent) {
    const p = createObject(parent.prototype);
    p.constructor = child;
    child.prototype = p;
    child.super_ = parent;
    return p;
}

export default inheritPrototype;
