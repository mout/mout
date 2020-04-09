import getQuery from './getQuery';

/**
 * Checks if query string contains parameter.
 */
function contains(url, paramName) {
    var regex = new RegExp('(\\?|&)' + paramName + '=', 'g'); //matches `?param=` or `&param=`
    return regex.test(getQuery(url));
}

export default contains;
