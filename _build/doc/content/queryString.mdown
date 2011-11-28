# amd-utils / queryString #

Utilities for query string manipulation.



## decodeQuery(str):Object

Parses query string and creates an object of keys => vals. Will typecast value
with `string/typecast` and decode string parameters using
`decodeURIComponent()`.

```js
decodeQuery('?foo=bar&lorem=123'); // {foo: "bar", lorem: 123}
```


## encodeQuery(obj):String

Encode object into a query string. Will encode parameters with
`encodeURIComponent()`.

```js
encodeQuery({foo: "bar", lorem: 123}); // "?foo=bar&lorem=123"
```


## getParam(param, url):*

Get query parameter value. Will typecast value with `string/typecast`.
Allow parsing a custom URL or uses `location.href` by default.

### Arguments:

 1. `param` (String) : Parameter name.
 2. `[url]` (String) : Url. Will use `location.href` by default.

### Example:

```js
//if current URI = example.com/?foo=bar&lorem=123&ipsum=false
getParam('foo');   // "bar"
getParam('lorem'); // 123
getPram('ipsum');  // false

//allow custom URL
getParam('dolor', 'example.com/?dolor=amet'); // "amet"
```


## getQueryObject(url):Object

Parses URL, extracts query string and decodes it. Will use `location.href` by default.

Alias to: `decodeQuery(getQueryString(url))`.

```js
//if current URI = example.com/?foo=bar&lorem=123&ipsum=false
getQueryObject(); // {foo: "bar", lorem: 123, ipsum: false}

//allow custom URL
getQueryObject('example.com/?lorem=ipsum'); // {lorem: "ipsum"}
```


## getQueryString(url):String

Gets full query as string with all special chars decoded. It avoid issues with
query string inside `location.hash` (e.g. "index.html?dolor=1#/lorem/?foo=bar").
Will use `location.href` by default.

```js
//if current URI = example.com/?foo=bar&lorem=123&ipsum=false
getQueryString(); // "?foo=bar&lorem=123&ipsum=false"

//allow custom URL
getQueryString('example.com/?lorem=ipsum'); // "?lorem=ipsum"
```


## hasParam(paramName, url):Boolen

Checks if query string contains parameter.

### Arguments:

 1. `paramName` (String) : Parameter name.
 2. `[url]` (String)     : Custom URL. Will use `location.href` by default.

### Example:

```js
//if current URI = example.com/?foo=bar&lorem=123&ipsum=false
hasParam('foo');   // true
hasParam('dolor'); // false

//allow custom URL
hasParam('lorem', 'example.com/?lorem=ipsum'); // true
hasParam('foo', 'example.com/?lorem=ipsum');   //false
```

-------------------------------------------------------------------------------

For more usage examples check specs inside `/tests` folder. Unit tests are the
best documentation you can get...
