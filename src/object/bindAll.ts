import functions from './functions';
import bind from '../function/bind';
import forEach from '../array/forEach';

/**
 * Binds methods of the object to be run in it's own context.
 */
function bindAll<K extends string, T extends {[k in K]: T[K]}>(obj: T, ...args: K[]) {
    const keys: K[] = args.length > 1 ? args : functions(obj);
    forEach(keys, function(key) {
        obj[key] = bind(obj[key], obj);
    });
}

export default bindAll;
