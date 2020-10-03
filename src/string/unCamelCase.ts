import toString from '../lang/toString';

const CAMEL_CASE_BORDER = /([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g;

/**
 * Add space between camelCase text.
 */
function unCamelCase(str: string, delimiter: string | null = ' '): string {
    if (delimiter == null) {
        delimiter = ' ';
    }

    function join(str, c1, c2) {
        return c1 + delimiter + c2;
    }

    str = toString(str);
    str = str.replace(CAMEL_CASE_BORDER, join);
    str = str.toLowerCase(); // add space between camelCase text
    return str;
}
export default unCamelCase;
