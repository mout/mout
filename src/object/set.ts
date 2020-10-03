import namespace from './namespace';

/**
 * set "nested" object property
 */
function set(obj, prop, val) {
    const parts = /^(.+)\.(.+)$/.exec(prop);
    if (parts) {
        namespace(obj, parts[1])[parts[2]] = val;
    } else {
        obj[prop] = val;
    }
}

export default set;
