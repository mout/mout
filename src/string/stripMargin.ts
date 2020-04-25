import toString from '../lang/toString';
import escapeRegExp from './escapeRegExp';
const DEFAULT_MARGIN_CHAR = '|';
/**
 * Strip leading characters followed by 'marginChar' from every line in a String.
 *
 * marginChar defaults to '|'.
 */
function stripMargin(str, marginChar) {
    marginChar = escapeRegExp(marginChar || DEFAULT_MARGIN_CHAR);
    str = toString(str);

    const regexp = new RegExp(`^.*${marginChar}`, 'gm');

    return str.replace(regexp, '');
}

export default stripMargin;
