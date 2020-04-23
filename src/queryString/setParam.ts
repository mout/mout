/**
 * Set query string parameter value
 */
function setParam(url = '', paramName, value) {
    const re = new RegExp(`(\\?|&)${paramName}=[^&]*`);
    const param = `${paramName}=${encodeURIComponent(value)}`;

    if (re.test(url)) {
        return url.replace(re, `$1${param}`);
    } else {
        if (url.indexOf('?') === -1) {
            url += '?';
        }
        if (url.indexOf('=') !== -1) {
            url += '&';
        }
        return url + param;
    }
}

export default setParam;
