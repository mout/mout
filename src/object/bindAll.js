import functions from './functions';
import bind from '../function/bind';
import forEach from '../array/forEach';
import slice from '../array/slice';

/**
 * Binds methods of the object to be run in it's own context.
 */
function bindAll(obj, rest_methodNames) {
    var keys = arguments.length > 1 ? slice(arguments, 1) : functions(obj);
    forEach(keys, function(key) {
        obj[key] = bind(obj[key], obj);
    });
}

export default bindAll;
