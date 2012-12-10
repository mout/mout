# amd-utils #

[![Build Status](https://secure.travis-ci.org/millermedeiros/amd-utils.png)](https://travis-ci.org/millermedeiros/amd-utils)

http://millermedeiros.github.com/amd-utils

Modular JavaScript utilities written in the
[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) format.

All code is library agnostic and consist mostly of helper methods that aren't
directly related with the DOM, the purpose of this library isn't to replace
Dojo, jQuery, YUI, Mootools, etc, but to provide modular solutions for common
problems that aren't solved by most of them.



## Main goals ##

 - increase code reuse;
 - be clear (code should be clean/readable);
 - be easy to debug;
 - be easy to maintain;
 - follow best practices;
 - follow standards when possible;
 - **don't convert JavaScript into another language!**
 - be compatible with other frameworks;
 - be modular;
 - have unit tests for all modules.



## What shouldn't be here ##

 - UI components;
 - CSS selector engine;
 - Event system - pub/sub;
 - Template engine;
 - Anything that could be a separate library and/or isn't a modular utility...




## Why AMD? ##

**Because AMD is awesome!**

By keeping each function in a separate package we can require just the
methods/packages that are required by our app and let the RequireJS optimizer
bundle only what is currently being used. We also have an extra benefit that we
split the methods into separate packages so we reduce the chance of name
collisions and the code is more organized. AMD is flexible and enables things
that wouldn't be possible with a different module system or with a conventional
namespace approach (remapping a module, conditionally loading, etc).

Read these links if you still can't see why:

 - [Why AMD?](http://requirejs.org/docs/whyamd.html)
 - [AMD is better for the web than CJS modules](blog.millermedeiros.com/2011/09/amd-is-better-for-the-web-than-commonjs-modules/)
 - [AMD & CommonJS modules](http://briancavalier.com/presentations/pgh-js-amd-10-2011/)
 - [AMD vs. CJS](http://unscriptable.com/index.php/2011/09/30/amd-versus-cjs-whats-the-best-format/)
 - [Namespaces are Old School](http://blog.millermedeiros.com/namespaces-are-old-school/)

PS: Your mileage may vary...



## Node.js ##

AMD-utils also works on [node.js](http://nodejs.org), just run:

    npm install amd-utils

It will download amd-utils from the NPM repository and convert the AMD modules
into a node.js compatible format using
[nodefy](https://github.com/millermedeiros/nodefy), there is no extra overhead,
you can use it like a regular node.js package.

```js
// you can load individual methods
var map = require('amd-utils/array/map');
map([1, 2], function(v){ return val * val; }); // [1, 4]

// a single package
var stringUtils = require('amd-utils/string');
stringUtils.camelCase('Foo Bar'); // "fooBar"

// or the whole lib
var utils = require('amd-utils');
console.log( utils.math.clamp(100, 0, 50) ); // 50
```



## Important ##

Since each function is a separate module they have independent version numbers
and a last edit date.

Since code is very modular (broken into multiple files) it is really important
that you run an optimizer before deploying the code to a server, otherwise you
may end up having too many file requests which can [degrade load-time
performance](http://developer.yahoo.com/performance/rules.html#num_http) a lot.
See [RequireJS optimization](http://requirejs.org/docs/optimization.html) for
more info.



## Contributing ##

Fork the project on Github: https://github.com/millermedeiros/amd-utils

 > "Write clearly, don't be too clever" - The Elements of Programming Style

Avoid unnamed functions and follow the other modules structure. By only using
named functions it will be easier to extract the code from the AMD module if
needed and it will also give better error messages, JavaScript minifiers like
[Google Closure Compiler](http://code.google.com/closure/compiler/) and
[UglifyJS](https://github.com/mishoo/UglifyJS) will make sure code is as
small/optimized as possible.

 > "Make it clear before you make it faster." - The Elements of Programming Style

Be sure to always create tests for each proposed module. Features will only be
merged if they contain proper tests and documentation.

 > "Good code is its own best documentation." - Steve McConnell

We should do a code review before merging to make sure names makes sense and
implementation is as good as possible.

Check the [contributors list at github](https://github.com/millermedeiros/amd-utils/contributors).


## Build Script ##

The build script have a set of very helpful commands, run `npm install --dev`
(only required once) and then check the available commands:

    node build --help


### Keeping packages and specs in sync ###

The build script can be used to update packages and specs files:

    node build pkg

The packages/specs are automatically updated every time you run `npm test` as
well.

You can also add new modules with the command `node build add
package/moduleName`, this will create a new module `src/package/moduleName.js`
and also a failing spec `tests/spec/package/spec-moduleName.js`.


### Tests & Code Coverage ###

Tests can be found inside the `tests` folder, to execute them in the browser
open the `tests/runner.html`. The same tests also work on node.js by running
`npm test`.

We should have tests for all methods and ensure we have a high code coverage
through our continuous integration server
([travis](https://travis-ci.org/millermedeiros/amd-utils)). When you ask for
a pull request Travis will automatically run the tests on node.js and check the
code coverage as well.

We run `node build pkg` automatically before any `npm test`, so specs and
packages should always be in sync. (will avoid human mistakes)

To check code coverage run `npm test --coverage`, it will generate the reports
inside the `coverage` folder and also log the results. Please note that node.js
doesn't execute all code branches since we have some conditionals that are only
met on old JavaScript engines (eg. IE 7-8), so we will never have 100% code
coverage (but should be close to it).


### Building The Documentation ###

The documentation is generated based on markdown files inside the
`doc/mdown` folder using [mdoc](https://github.com/millermedeiros/mdoc).
To compile the docs run:

    node build doc

It will replace all the files inside the `doc/html` folder.

Documentation files should be always up-to-date since modules are only
committed to the `master` branch after they get proper tests and documentation.




## Documentation ##

Online documentation can be found at http://millermedeiros.github.com/amd-utils
or inside the `doc` folder.



## License ##

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

