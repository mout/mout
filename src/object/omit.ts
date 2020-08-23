import contains from '../array/contains';

/**
 * Return a copy of the object, filtered to only contain properties except the blacklisted keys.
 */
function omit<T extends {}, E extends keyof T>(obj: T, varKeys: E[]): Omit<T, E>;
function omit<T extends {}, E extends keyof T>(obj: T, ...varKeys: E[]): Omit<T, E>;
function omit<T extends {}, E extends keyof T>(obj: T, ...varKeys) {
    const keys: E[] = Array.isArray(varKeys[0]) ? (varKeys[0] as E[]) : (varKeys as E[]);
    const out: Partial<T> = {};

    for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property) && !contains(keys, property)) {
            out[property] = obj[property];
        }
    }
    return out as Omit<T, E>;
}

export default omit;
