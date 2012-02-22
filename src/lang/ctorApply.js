define(function () {

    function F(){}

    /**
     * Do fn.apply on a constructor.
     * @version 0.1.0 (2011/11/24)
     */
    function ctorApply(ctor, args) {
        F.prototype = ctor.prototype;
        var instance = new F();
        ctor.apply(instance, args);
        return instance;
    }

    return ctorApply;

});
