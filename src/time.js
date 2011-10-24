define(function(require){

    /**
     * Utilities for time manipulation.
     * @exports amd-utils/time
     * @version 0.1.0 (2011/10/21)
     * @author Miller Medeiros
     */
    return {
        split        : require('./time/split'),
        toTimeString : require('./time/toTimeString')
    };

});
