import forOwn from '../object/forOwn';
import isArray from '../lang/isArray';
import forEach from '../array/forEach';

/**
 * Encode object into a query string.
 */
function encode(obj) {
    const query = [];
    let arrValues;
    let reg;
    forOwn(obj, function(val, key) {
        if (isArray(val)) {
            arrValues = `${key}=`;
            reg = new RegExp(`&${key}+=$`);
            forEach(val, function(aValue) {
                arrValues += `${encodeURIComponent(aValue)}&${key}=`;
            });
            query.push(arrValues.replace(reg, ''));
        } else {
            query.push(`${key}=${encodeURIComponent(val)}`);
        }
    });
    return query.length ? `?${query.join('&')}` : '';
}

export default encode;
