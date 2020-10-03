import toString from '../lang/toString';
import camelCase from './camelCase';
import upperCase from './upperCase';
/**
 * camelCase + UPPERCASE first char
 */
function pascalCase(str) {
    str = toString(str);
    return camelCase(str).replace(/^[a-z]/, upperCase);
}

export default pascalCase;
