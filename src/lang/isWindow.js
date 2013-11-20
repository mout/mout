define(['./isNull', './isUndefined'], function (isNull, isUndefined) {
    /**
     */
    function isWindow(val) {
        return !isNull(val) && !isUndefined(val) && val == val.window;
    }
    return isWindow;
});
