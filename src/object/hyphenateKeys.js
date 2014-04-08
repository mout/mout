define(['./mapKeys', 'mout/string/hyphenate'], function(mapKeys, hyphenate) {

	// Normalize all the keys of a given object by using hyphens as separators.
    function hyphenateKeys(obj) {
      return mapKeys(obj, function(key) {
        return hyphenate(key);
      });
    }

    return hyphenateKeys;

});