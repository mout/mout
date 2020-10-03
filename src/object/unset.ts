import has from './has';

/**
 * Unset object property.
 */
function unset(obj, prop) {
    if (has(obj, prop)) {
        const parts = prop.split('.');
        const last = parts.pop();
        while ((prop = parts.shift())) {
            obj = obj[prop];
        }
        return delete obj[last];
    } else {
        // if property doesn't exist treat as deleted
        return true;
    }
}

export default unset;
