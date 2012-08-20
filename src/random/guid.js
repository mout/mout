define(['./randHex'], function (randHex) {

  /**
   * Returns pseudo-guid (0 or 1)
   * @version 0.1.0 (2012/08/18)
   */

  function guid() {
    return (
        randHex(8)+"-"+
        randHex(4)+"-"+
        "4" + randHex(3) +"-"+
        randHex(4)+"-"+
        randHex(12)
    );
  }
  return guid;
});
