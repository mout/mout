define(['./mapKeys','mout/string/camelCase'], function(mapKeys, camelCase) {

	// Normalize all the keys of a given object to camel case.
    function camelCaseKeys(obj) {
      return mapKeys(obj, function(key) {
        return camelCase(key);
      });
    }

    return camelCaseKeys;

});