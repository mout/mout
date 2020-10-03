import kindOf from './kindOf';
import isPlainObject from './isPlainObject';
import mixIn from '../object/mixIn';

/**
 * Clone native types.
 */
function clone(val) {
    switch (kindOf(val)) {
        case 'Object':
            return cloneObject(val) as {};
        case 'Array':
            return cloneArray(val) as Array<unknown>;
        case 'RegExp':
            return cloneRegExp(val) as RegExp;
        case 'Date':
            return cloneDate(val) as Date;
        default:
            return val;
    }
}

function cloneObject<T extends {}>(source: T): T {
    if (isPlainObject(source)) {
        return mixIn({}, source);
    } else {
        return source;
    }
}

function cloneRegExp(r: RegExp): RegExp {
    let flags = '';
    flags += r.multiline ? 'm' : '';
    flags += r.global ? 'g' : '';
    flags += r.ignoreCase ? 'i' : '';
    return new RegExp(r.source, flags);
}

function cloneDate(date: Date): Date {
    return new Date(+date);
}

function cloneArray<T>(arr: T[]): T[] {
    return arr.slice();
}

export default clone;
