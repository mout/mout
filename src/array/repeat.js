define(function() {

  /**
   * Create an array of size N and fill with a value.
   * This function will throw an exception in case
   * you pass a negative number.
   */
  function repeat(n, value) {
    var arr = new Array(n);
    return arr.fill(value);
  }

  return repeat;
});
