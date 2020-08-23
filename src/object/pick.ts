/**
 * Return a copy of the object, filtered to only have values for the whitelisted keys.
 */
function pick<T extends {}>(obj: T, varKeys: string[]): Partial<T>;
function pick<T extends {}>(obj: T, ...varKeys: string[]): Partial<T>;
function pick<T extends {}>(obj: T, ...varKeys) {
    const keys = Array.isArray(varKeys[0]) ? (varKeys[0] as string[]) : (varKeys as string[]);
    const out: Partial<typeof obj> = {};
    let i = 0;
    let key;
    while ((key = keys[i++])) {
        out[key] = obj[key];
    }
    return out;
}

export default pick;
