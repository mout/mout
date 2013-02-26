mout changelog
==============

v0.4.0 (2013/02/26)
-------------------

 - add `object/equals`
 - add `object/deepEquals`
 - add `object/matches`.
 - add `lang/is` and `lang/isnt`.
 - add `lang/isInteger`.
 - add `array/findIndex`.
 - add shorthand syntax to `array/*`, `object/*` and `collection/*` methods.
 - improve `number/sign` behavior when value is NaN or +0 or -0.
 - improve `lang/isNaN` to actually check if value *is not a number* without
   coercing value; so `[]`, `""`, `null` and `"12"` are considered NaN (#39).
 - improve `string/contains` to match ES6 behavior (add fromIndex argument).


v0.3.0 (2013/02/01)
-------------------

 - add `lang/clone`.
 - add `lang/toString`.
 - add `string/replace`.
 - add `string/WHITE_SPACES`
 - rename `function/curry` to `function/partial`.
 - allow custom chars in `string/trim`, `ltrim`, and `rtrim`.
 - convert values to strings in the `string/*` functions.


v0.2.0 (2013/01/13)
-------------------

 - fix bug in `math/ceil` for negative radixes.
 - change `object/deepFillIn` and `object/deepMixIn` to recurse only if both
   existing and new values are plain objects. Will not recurse into arrays
   or objects not created by the Object constructor.
 - add `lang/isPlainObject` to check if a file is a valid object and is created
   by the Object constructor
 - change `lang/clone` behavior when dealing with custom types (avoid cloning
   it by default) and add second argument to allow custom behavior if needed.
 - rename `lang/clone` to `lang/deepClone`.
 - add VERSION property to index.js
 - simplify `math/floor`, `math/round`, `math/ceil` and `math/countSteps`.


v0.1.0 (2013/01/09)
-------------------

- Rename project from "amd-utils" to "mout"

