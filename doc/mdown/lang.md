# amd-utils / lang #

Language Utilities. Easier inheritance, scope handling, type checks.



## clone(val):*

Deep clone native types like Object, Array, RegExp, Date and primitives.

### Example

```js
var a = {foo:'bar', obj: {a:1, b:2}};
var b = clone(a); // {foo:'bar', obj: {a:1, b:2}}
console.log( a === b ); // false
console.log( a.obj === b.obj ); // false

var c = [1, 2, [3, 4]];
var d = clone(c); // [1, 2, [3, 4]]
var e = c.concat(); // [1, 2, [3, 4]]

console.log( c[2] === d[2] ); // false
// concat doesn't do a deep clone, arrays are passed by reference
console.log( e[2] === d[2] ); // true
```



## createObject(parent, [props]):Object

Create Object using prototypal inheritance and setting custom properties.

Mix between [Douglas Crockford Prototypal Inheritance](http://javascript.crockford.com/prototypal.html) and the EcmaScript 5 `Object.create()` method.

### Arguments

 1. `parent` (Object)  : Parent Object
 2. `[props]` (Object) : Object properties

### Example

```js
var base = {
    trace : function(){
        console.log(this.name);
    }
};

var myObj = createObject(base, {
    name : 'Lorem Ipsum'
});

myObject.trace(); // "Lorem Ipsum"
```



## ctorApply(constructor, args):Object

Do `Function.prototype.apply()` on a constructor while maintaining prototype
chain.

```js
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.walk = function(){
    console.log(this.name +' is walking');
};

var args = ['John', 'Doe'];

// "similar" effect as calling `new Person("John", "Doe")`
var john = ctorApply(Person, args);
john.walk(); // "John is walking"
```



## defaults(val, ...defaults):void

Return first value that isn't `null` or `undefined`.

    function doSomethingAwesome(foo, bar) {
        // default arguments
        foo = defaults(foo, 'lorem');
        bar = defaults(bar, 123);
        // ...
    }



## inheritPrototype(child, parent):void

Inherit prototype from another Object.

```js
function Foo(name){
    this.name = name;
}
Foo.prototype = {
    getName : function(){
        return this.name;
    }
};

function Bar(name){
    this.name = name;
}
//should be called before calling constructor
inheritPrototype(Bar, Foo);

var myObj = new Bar('lorem ipsum');
myObj.getName(); // "lorem ipsum"
```



## isArguments(val):Boolean

If value is an "Arguments" object.



## isArray(val):Boolean

If value is an Array. Uses native ES5 `Array.isArray()` if available.



## isBoolean(val):Boolean

If value is a Boolean.



## isDate(val):Boolean

If value is a Date.



## isEmpty(val):Boolean

Checks if Array/Object/String is empty.


```js
isEmpty('');         // true
isEmpty('bar');      // false
isEmpty([]);         // true
isEmpty([1, 2]);     // false
isEmpty({});         // true
isEmpty({a:1, b:2}); // false
```



## isFunction(val):Boolean

If value is a Function.



## isKind(val, kind):Boolean

If value is of "kind". (used internally by some of the *isSomething* checks).

Favor the other methods since strings are commonly mistyped and also because
some "kinds" can only be accurately checked by using other methods (e.g.
`Arguments`), some of the other checks are also faster.



## isNull(val):Boolean

If value is `null`.



## isNumber(val):Boolean

If value is a Number.



## isObject(val):Boolean

If value is an Object.



## isRegExp(val):Boolean

If value is a RegExp.



## isString(val):Boolean

If value is a String.



## isUndefined(val):Boolean

If value is `undefined`.



## kindOf(val):String

Gets kind of value (e.g. "String", "Number", "RegExp", "Null", "Date").
Used internally by `isKind()` and most of the other *isSomething* checks.




## toArray(val):Array

Convert array-like object into Array or wrap value into Array.

```js
toArray({
    "0" : "foo",
    "1" : "bar",
    "length" : 2
});                              // ["foo", "bar"]

function foo(){
    return toArray(arguments);
}
foo("lorem", 123);               // ["lorem", 123]

toArray("lorem ipsum");          // ["lorem ipsum"]
toArray(window);                 // [window]
toArray({foo:"bar", lorem:123}); // [{foo:"bar", lorem:123}]
```

See: object/values()


-------------------------------------------------------------------------------

For more usage examples check specs inside `/tests` folder. Unit tests are the
best documentation you can get...
