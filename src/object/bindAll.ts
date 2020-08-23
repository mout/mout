import functions from './functions';
import bind from '../function/bind';
import forEach from '../array/forEach';

/**
 * Binds methods of the object to be run in it's own context.
 */
function bindAll<T extends {}>(obj: T, ...args: Array<keyof T>) {
    const keys = args.length > 0 ? args : functions(obj);
    forEach(keys, function(key) {
        obj[key] = bind(obj[key], obj);
    });
}

export default bindAll;
