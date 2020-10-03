import get from './get';

let UNDEF: undefined;

/**
 * Check if object has nested property.
 */
function has(obj: Record<string, any>, prop: string): boolean {
    return get(obj, prop) !== UNDEF;
}

export default has;
