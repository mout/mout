define(function(require){

    /**
     * Math utilities.
     * @exports amd-utils/math
     * @author Miller Medeiros
     * @version 0.2.0 (2011/11/16)
     */
    return {
        clamp      : require('./math/clamp'),
        countSteps : require('./math/countSteps'),
        inRange    : require('./math/inRange'),
        isNear     : require('./math/isNear'),
        lerp       : require('./math/lerp'),
        loop       : require('./math/loop'),
        map        : require('./math/map'),
        norm       : require('./math/norm'),
        rand       : require('./math/rand'),
        randBit    : require('./math/randBit'),
        randInt    : require('./math/randInt'),
        randSign    : require('./math/randSign'),
        snap       : require('./math/snap')
    };

});
