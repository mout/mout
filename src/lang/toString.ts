/**
 * Typecast a value to a String, using an empty string value for null or
 * undefined.
 */
function toString(val): string {
    return val == null ? '' : val.toString();
}

export default toString;
