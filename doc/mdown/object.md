# amd-utils / object #

Object utilities.



## fillIn(obj, ...default):Object

Fill in missing properties in object with values from the *defaults* objects.

    var base = {
        foo : 'bar',
        num : 123
    };

    fillIn({foo:'ipsum'}, base); // {foo:'ipsum', num:123}

PS: it allows merging multiple objects at once, the first ones will take
precedence.

See: [`mixIn()`](#mixIn), [`merge()`](#merge)



## filter(obj, callback, [thisObj])

Returns a new object containing all properties where `callback` returns true,
similar to Array/filter. It does not use properties from the object's
prototype.

Callback receives the same arguments as `forOwn()`.

See: [`forOwn()`](#forOwn), [`pick()`](#pick)

```js
var obj = {
    foo: 'value',
    bar: 'bar value'
};

// returns { bar: 'bar value' }
filter(obj, function(v) { return value.length > 5; });

// returns { foo: 'value' }
filter(obj, function(v, k) { return k === 'foo'; });
```



## forOwn(obj, callback[, thisObj])

Iterate over all own properties from an Object, similar to Array/forEach.

It [avoids don't enum bug on IE](https://developer.mozilla.org/en/ECMAScript_DontEnum_attribute#JScript_DontEnum_Bug).
Notice that it won't iterate over properties from the prototype.

See: [`keys()`](#keys), [`values()`](#values)

### Callback arguments

Callback will receive the following arguments:

 1. Property Value (*)
 2. Key name (String)
 3. Target object (Object)

### Example

```js
var obj = {
    foo : 1,
    bar : 2,
    lorem : 3
};

var result = 0;
var keys = [];

forOwn(obj, function(val, key, o){
    result += val;
    keys.push(key);
});

console.log(result); // 6
console.log(keys);   // ['foo', 'bar', 'lorem']
```



## get(obj, propName):*

Returns nested property value. Will return `undefined` if property doesn't
exist.

See: [`set()`](#set), [`namespace()`](#namespace), [`has()`](#has)

```js
var lorem = {
        ipsum : {
            dolor : {
                sit : 'amet'
            }
        }
    };

get(lorem, 'ipsum.dolor.sit'); // "amet"
get(lorem, 'foo.bar');         // undefined
```



## has(obj, propName):Boolean

Checks if object contains a child property. Useful for cases where you need to
check if an object contain a *nested* property. It will get properties
inherited by the prototype.

see: [`hasOwn()`](#hasOwn), [`get()`](#get)

```js
var a = {
        b : {
            c : 123
        }
    };

has(a, 'b.c');   // true
has(a, 'foo.c'); // false
```

### Common use case

```js
if( has(a, 'foo.c') ){ // false
    // ...
}

if( a.foo.c ){ // ReferenceError: `foo` is not defined
    // ...
}
```



## hasOwn(obj, propName):Boolean

Safer `Object.hasOwnProperty`. Returns a boolean indicating whether the object
has the specified property.

see: [`has()`](#has)

```js
var obj = {
    foo: 1,
    hasOwnProperty : 'bar'
};

obj.hasOwnProperty('foo'); // ERROR! hasOwnProperty is not a function

hasOwn(obj, 'foo');            // true
hasOwn(obj, 'hasOwnProperty'); // true
hasOwn(obj, 'toString');       // false
```



## keys(obj):Array

Returns an array of all own enumerable properties found upon a given object.
It will use the native `Object.keys` if present.

PS: it won't return properties from the prototype.

See: [`forOwn()`](#forOwn), [`values()`](#values)

```js
var obj = {
    foo : 1,
    bar : 2,
    lorem : 3
};
keys(obj); // ['foo', 'bar', 'lorem']
```



## map(obj, callback, [thisObj]):Object

Returns a new object where the property values are the result of calling the
callback for each property in the original object, similar to Array/map.

The callback function receives the same arguments as in `forOwn()`.

See: [`forOwn()`](#forOwn)

```js
var obj = { foo: 1, bar: 2 },
    data = { foo: 0, bar: 1 };

map(obj, function(v) { return v + 1; }); // { foo: 2, bar: 3 }
map(obj, function(v, k) { return k; }); // { foo: "foo", bar: "bar" }
map(obj, function(v, k) { return this[k]; }, data); // { foo: 0, bar: 1 }
```



## merge(...objects):Object

Deep merges objects. Note that objects and properties will be cloned during the
process to avoid undesired side effects. It return a new object and won't
affect source objects.

```js
var obj1 = {a: {b: 1, c: 1, d: {e: 1, f: 1}}};
var obj2 = {a: {b: 2, d : {f : 'yeah'} }};

merge(obj1, obj2); // {a: {b : 2, c : 1, d : {e : 1, f : 'yeah'}}}
```

See: [`fillIn()`](#fillIn), [`mixIn()`](#mixIn)




## mixIn(target, ...objects):Object

Combine properties from all the objects into first one.

This method affects target object in place, if you want to create a new Object
pass an empty object as first parameter.

### Arguments

 1. `target` (Object)        : Target Object.
 2. `...objects` (...Object) : Objects to be combined (0...n objects).

### Example

```js
var a = {foo: "bar"};
var b = {lorem: 123};

mixIn({}, a, b); // {foo: "bar", lorem: 123}
console.log(a);  // {foo: "bar"}

mixIn(a, b);     // {foo: "bar", lorem: 123}
console.log(a);  // {foo: "bar", lorem: 123}
```

See: [`fillIn()`](#fillIn), [`merge()`](#merge)




## namespace(obj, propName):Object

Creates an empty object inside namespace if not existent. Will return created
object or existing object.

See: [`get()`](#get), [`set()`](#set)

```js
var obj = {};
namespace(obj, 'foo.bar'); // {}
console.log(obj);          // {foo:{bar:{}}}
```



## pick(obj, ...keys):Object

Return a copy of the object that contains only the whitelisted keys.

See: [`filter()`](#filter)

```js
var user = {
    firstName : 'John',
    lastName : 'Doe',
    dob : '1985/07/23',
    gender : 'male'
};

// can pass an array of keys as second argument
var keys = ['firstName', 'dob']
pick(user, keys); // {firstName:"John", dob: "1985/07/23"}

// or multiple arguments
pick(user, 'firstName', 'lastName'); // {firstName:"John", lastName: "Doe"}
```



## values(obj):Array

Returns an array of all own enumerable properties values found upon a given object.

PS: it won't return properties from the prototype.

See: [`forOwn()`](#forOwn), [`keys()`](#keys)

```js
var obj = {
    foo : 1,
    bar : 2,
    lorem : 3
};
values(obj); // [1, 2, 3]
```



## set(obj, propName, value)

Sets a nested property value.

See: [`get()`](#get), [`namespace()`](#namespace)

```js
var obj = {};
set(obj, 'foo.bar', 123);
console.log(obj.foo.bar); // 123
console.log(obj);         // {foo:{bar:123}}
```



## size(obj):Number

Returns the count of own enumerable properties found upon a given object.

PS: it won't return properties from the prototype.

See: [`forOwn()`](#forOwn), [`keys()`](#keys)

```js
var obj = {
    foo : 1,
    bar : 2,
    lorem : 3
};
size(obj); // 3
```



## unset(obj, propName):Boolean

Delete object property if existent and returns a boolean indicating succes. It
will also return `true` if property doesn't exist.

Some properties can't be deleted, to understand why [check this
article](http://perfectionkills.com/understanding-delete/).

See: [`set()`](#set)

```js
var lorem = {
        ipsum : {
            dolor : {
                sit : 'amet'
            }
        }
    };

unset(lorem, 'ipsum.dolor.sit'); // true
console.log(lorem.ipsum.dolor);  // {}
unset(lorem, 'foo.bar');         // true
```
