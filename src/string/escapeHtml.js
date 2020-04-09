import toString from '../lang/toString';

/**
 * Escapes a string for insertion into HTML.
 */
function escapeHtml(str) {
    str = toString(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;');
    return str;
}

export default escapeHtml;
