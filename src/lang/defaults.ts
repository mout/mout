import toArray from './toArray';
import find from '../array/find';

/**
 * Return first non void argument
 */
function defaults(varArgs) {
    return find(toArray(arguments), nonVoid);
}

function nonVoid(val) {
    return val != null;
}

export default defaults;
