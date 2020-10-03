import toString from '../lang/toString';
import lowerCase from './lowerCase';
import upperCase from './upperCase';
/**
 * UPPERCASE first char of each sentence and lowercase other chars.
 */
function sentenceCase(str) {
    str = toString(str);

    // Replace first char of each sentence (new line or after '.\s+') to
    // UPPERCASE
    return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}
export default sentenceCase;
