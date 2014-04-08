define(['./forOwn'], function(forOwn) {

    // Maps a function over the keys of an object.
    function mapKeys(obj, callback, thisObj) {
      var output = {},
          newKey;

      forOwn(obj, function(value, key, obj) {
          newKey = callback.call(thisObj, key, value, obj);
          output[newKey] = value;
      });

      return output;
    }

    return mapKeys;

});