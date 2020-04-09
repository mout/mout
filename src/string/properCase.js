import toString from '../lang/toString';
import lowerCase from './lowerCase';
import upperCase from './upperCase';
/**
 * UPPERCASE first char of each word.
 */
function properCase(str) {
    str = toString(str);
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}

export default properCase;
