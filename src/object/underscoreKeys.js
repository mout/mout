define(['./mapKeys', 'mout/string/underscore'], function(mapKeys, underscore) {

	// Normalize all the keys of a given object by using underscores as separators.
    function underscoreKeys(obj) {
      return mapKeys(obj, function(key) {
        return underscore(key);
      });
    }

    return underscoreKeys;
    
});