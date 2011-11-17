define(function(require){

    /**
     * Math utilities.
     * @exports amd-utils/math
     * @author Miller Medeiros
     * @version 0.3.0 (2011/11/17)
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
        snap       : require('./math/snap')
    };

});
