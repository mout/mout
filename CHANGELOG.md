mout changelog
==============

v0.2.0
------

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


v0.1.0
------

- Rename project from "amd-utils" to "mout"

