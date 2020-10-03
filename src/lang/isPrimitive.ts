/**
 * Checks if the object is a primitive
 */
function isPrimitive(value: any): boolean {
    // Using switch fallthrough because it's simple to read and is
    // generally fast: http://jsperf.com/testing-value-is-primitive/5
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
            return true;
    }

    return value == null;
}

export default isPrimitive;
