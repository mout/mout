/**
 * get "nested" object property
 */
function get(obj: Record<string, any>, prop: string): any {
    if (!obj) return;
    const parts = prop.split('.');
    const last = parts.pop()!;
    while ((prop = parts.shift()!)) {
        obj = obj[prop];
        if (obj == null) return;
    }

    return obj[last];
}

export default get;
