define(function () {

    /**
     * Returns random hex byte (00-FF)
     * @version 0.1.0 (2012/08/18)
     */
    function randomByte() {
      var byte = ~~(Math.random()*256).toString(16);
      return ( '0' + byte).substr(-2); // leading zero
    }

    return randomByte;
});
