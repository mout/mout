import toString from '../lang/toString';
import get from '../object/get';

const stache = /\{\{([^\}]+)\}\}/g; // mustache-like

/**
 * String interpolation
 */
function interpolate(template, replacements, syntax) {
    template = toString(template);
    const replaceFn = function(match, prop) {
        return toString(get(replacements, prop));
    };
    return template.replace(syntax || stache, replaceFn);
}

export default interpolate;
