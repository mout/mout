# function #

Function*(al)* utilities.



## bind(fn, context, [...args]):Function

Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.

### Arguments

 1. `fn` (Function)    : Target Function
 2. `context` (Object) : Execution context (object used as `this`)
 3. `[...args]` (*)    : Arguments (0...n arguments)

See: [`partial()`](#partial)



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



## debounce(fn, delay[, isAsap]):Function

Creates a function that will delay the execution of `fn` until after `delay`
milliseconds have elapsed since the last time it was invoked.

Subsequent calls to the debounced function will return the result of the last
`fn` call.

```js
// sometimes less is more
var lazyRedraw = debounce(redraw, 300);
foo.on.resize.add(lazyRedraw);
```

In this visualization, `|` is a debounced-function call and `X` is the actual
callback execution:

    Default
    ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
                             X                                 X

    Debounced with `isAsap == true`:
    ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
    X                                 X

See: [`throttle()`](#throttle)
See: [`delay()`](#delay)


## delay(fn, millis, [context, args, override=true]):Number;

Executes a function after a delay in milliseconds within the given context, optionally adding any additional parameters.

### Arguments

 1. `fn` (Function)      : Target Function
 2. `millis` (Number)    : Delay in milliseconds
 3. `context` (Object)   : Execution context (object used as `this`)
 4. `args` (Array)       : Optional additional parameters.
 5. `override` (Boolean) : Determines whether previous delays on the same function should be canceled. Default is `true`.

```js
function addValue(value) {
	this.a += value;
}

var context = { a: 400 };
var identifier = delay(addValue, 3200, context, [100]);
```

To cancel a created delay before it's execution `delay.clear` can be called using the identifier object as parameter.


```js
var identifier = delay(addValue, 3000, context, [100]);
...
delay.clear(identifier);
```

The override flag determines if multiple delays on the same function can coexist. By default any delay will override previous delays.

```js
delay(animateIn, 100);
delay(animateIn, 500);
// animateIn will only be called once after 500 milliseconds
```

By setting the flag to `false` multiple delays will be triggered.

```js
delay(animateIn, 100, this, null, false);
delay(animateIn, 500, this, null, false);
// animateIn will be called twice, after 100 and 500 milliseconds
```


See: [`bind()`](#bind)
See: [`throttle()`](#throttle)
See: [`debounce()`](#debounce)

## func(name):Function

Returns a function that calls a method with given `name` on supplied object.
Useful for iteration methods like `array/map` and `array/forEach`.

See: [`prop()`](#prop)

```js
// will call the method `getName()` for each `user`
var names = map(users, func('getName'));
```



## partial(fn, [...args]):Function

Return a partially applied function supplying default arguments.

This method is similar to [`bind`](#bind), except it does not alter the this
binding.

### Arguments

 1. `fn` (Function)    : Target Function
 3. `[...args]` (*)    : Arguments (0...n arguments)

See: [`bind()`](#bind)

```js
function add(a, b){ return a + b }
var add10 = partial(add, 10);
console.log( add10(2) ); // 12
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



## throttle(fn, interval):Function

Creates a function that, when executed, will only call the `fn` function at
most once per every `interval` milliseconds.

If the throttled function is invoked more than once during the wait timeout,
`fn` will also be called on the trailing edge of the timeout.

Subsequent calls to the throttled function will return the result of the last
`fn` call.

```js
// sometimes less is more
var lazyRedraw = throttle(redraw, 300);
foo.on.resize.add(lazyRedraw);
```

In this visualization, `|` is a throttled-function call and `X` is the actual
`fn` execution:

    ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
    X    X    X    X    X    X        X    X    X    X    X    X

See: [`debounce()`](#debounce)
See: [`delay()`](#delay)




-------------------------------------------------------------------------------

For more usage examples check specs inside `/tests` folder. Unit tests are the
best documentation you can get...

