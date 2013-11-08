define(['../number/isNaN'], function (isNaN) {

    /**
     * Check if both arguments are egal.
     */
    function is(x, y){
        // implementation borrowed from harmony:egal spec
        if (x === y) {
          // 0 === -0, but they are not identical
          return x !== 0 || 1 / x === 1 / y;
        }

        // NaN !== NaN, but they are identical.
        // native isNaN is broken: it converts its argument to number, so
        // isNaN("foo") => true
        return isNaN(x) && isNaN(y);
    }

    return is;

});
