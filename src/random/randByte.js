define(function () {

    /**
     * Returns random hex byte (00-FF)
     * @version 0.1.0 (2012/08/18)
     */
    function randomByte() {
      return ( '0' + (~~((Math.random())*256)).toString(16)).substr(-2);
    }

    return randomByte;
});
