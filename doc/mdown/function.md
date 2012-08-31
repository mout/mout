# amd-utils / function

Function*(al)* utilities.



## bind(fn, context, [...args]):Function

Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.

### Arguments

 1. `fn` (Function)    : Target Function
 2. `context` (Object) : Execution context (object used as `this`)
 3. `[...args]` (*)    : Arguments (0...n arguments)



## compose(...fn):Function

Returns the composition of a list of functions, where each function consumes
the return value of the function that follows. In math terms, composing the
functions `f()`, `g()`, and `h()` produces `f(g(h()))`.

```js
function add2(x) { return x + 2 }
function multi2(x) { return x * 2 }
map([1, 2, 3], compose(add2, multi2)); // [4, 6, 8]

//same as
map([1, 2, 3], function(x){
    return add2( multi2(x) );
});
```



## func(name):Function

Returns a function that calls a method with given `name` on supplied object.
Useful for iteration methods like `array/map` and `array/forEach`.

See: [`prop()`](#prop)

```js
// will call the method `getName()` for each `user`
var names = map(users, func('getName'));
```



## prop(name):Function

Returns a function that gets a property with given `name` from supplied object.
Useful for using in conjunction with `array/map` and/or for creating getters.

See: [`array/pluck()`](array.html#pluck)

```js
var users = [{name:"John", age:21}, {name:"Jane", age:25}];
// ["John", "Jane"]
var names = map(users, prop('name'));
```



## series(...fn):Function

Returns a function that will execute all the supplied functions in order and
passing the same parameters to all of them. Useful for combining multiple
`array/forEach` into a single one and/or for debugging.


```js
// call `console.log()` and `doStuff()` for each item item in the array
forEach(arr, series(console.log, doStuff));
```




-------------------------------------------------------------------------------

For more usage examples check specs inside `/tests` folder. Unit tests are the
best documentation you can get...

