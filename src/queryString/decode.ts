import typecast from '../string/typecast';
import isArray from '../lang/isArray';
import hasOwn from '../object/hasOwn';

/**
 * Decode query string into an object of keys => vals.
 */
function decode(queryStr, shouldTypecast) {
    const queryArr = (queryStr || '').replace('?', '').split('&');
    let i = -1;
    const obj = {};
    let equalIndex;
    let cur;
    let pValue;
    let pName;

    while ((cur = queryArr[++i])) {
        equalIndex = cur.indexOf('=');
        pName = cur.substring(0, equalIndex);
        pValue = decodeURIComponent(cur.substring(equalIndex + 1));
        if (shouldTypecast !== false) {
            pValue = typecast(pValue);
        }
        if (hasOwn(obj, pName)) {
            if (isArray(obj[pName])) {
                obj[pName].push(pValue);
            } else {
                obj[pName] = [obj[pName], pValue];
            }
        } else {
            obj[pName] = pValue;
        }
    }
    return obj;
}

export default decode;
