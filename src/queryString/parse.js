import decode from './decode';
import getQuery from './getQuery';

/**
 * Get query string, parses and decodes it.
 */
function parse(url, shouldTypecast) {
    return decode(getQuery(url), shouldTypecast);
}

export default parse;
