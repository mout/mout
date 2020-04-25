import hasOwn from './hasOwn';

let _hasDontEnumBug: boolean;
let _dontEnums: string[];

// eslint-disable-next-line require-jsdoc
function checkDontEnum() {
    _dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];

    _hasDontEnumBug = true;

    // eslint-disable-next-line guard-for-in, no-unused-vars
    for (const _ in { toString: null }) {
        _hasDontEnumBug = false;
    }
}

/**
 * Similar to Array/forEach but works over object properties and fixes Don't
 * Enum bug on IE.
 * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
 */
function forIn(obj: { [k: string]: any }, fn: Function, thisObj?: any) {
    let key: string;
    let i = 0;
    // no need to check if argument is a real object that way we can use
    // it for arrays, functions, date, etc.

    // post-pone check till needed
    if (_hasDontEnumBug == null) checkDontEnum();

    for (key in obj) {
        if (exec(fn, obj, key, thisObj) === false) {
            break;
        }
    }

    if (_hasDontEnumBug) {
        const ctor = obj.constructor;
        const isProto = !!ctor && obj === ctor.prototype;

        while ((key = _dontEnums[i++])) {
            // For constructor, if it is a prototype object the constructor
            // is always non-enumerable unless defined otherwise (and
            // enumerated above).  For non-prototype objects, it will have
            // to be defined on this object, since it cannot be defined on
            // any prototype objects.
            //
            // For other [[DontEnum]] properties, check if the value is
            // different than Object prototype value.
            if (
                (key !== 'constructor' || (!isProto && hasOwn(obj, key))) &&
                obj[key] !== Object.prototype[key]
            ) {
                if (exec(fn, obj, key, thisObj) === false) {
                    break;
                }
            }
        }
    }
}

// eslint-disable-next-line require-jsdoc
function exec(fn: Function, obj: { [k: string]: any }, key: string, thisObj: any): any {
    return fn.call(thisObj, obj[key], key, obj);
}

export default forIn;
