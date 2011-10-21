define(function(require){

    /**
     * Math utilities.
     * @exports amd-utils/math
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/20)
     */
    return {
        clamp      : require('./math/clamp'),
        loop       : require('./math/loop'),
        inRange    : require('./math/inRange'),
        isNear     : require('./math/isNear'),
        lerp       : require('./math/lerp'),
        norm       : require('./math/norm'),
        snap       : require('./math/snap'),
        countSteps : require('./math/countSteps'),
        map        : require('./math/map'),
        random     : require('./math/random'),
        randomInt  : require('./math/randomInt')
    };

});
