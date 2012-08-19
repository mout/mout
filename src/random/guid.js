define(['./randByte'], function (byte) {

  /**
   * Returns pseudo-guid (0 or 1)
   * @version 0.1.0 (2012/08/18)
   */

  function guid() {
    return (
        byte()+byte()+byte()+byte()+"-"+
        byte()+byte()+"-"+
        byte()+byte()+"-"+
        byte()+byte()+"-"+
        byte()+byte()+byte()+byte()+byte()+byte()
    );
  }
  return guid;
});
