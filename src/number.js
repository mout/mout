define(function(require){

    /**
     * Number Utilities.
     * @exports amd-utils/number
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/21)
     */
    return {
        MIN_INT : require('./number/MIN_INT'),
        MAX_INT : require('./number/MAX_INT'),
        toInt : require('./number/toInt'),
        toUInt : require('./number/toUInt'),
        ror : require('./number/ror'),
        rol : require('./number/rol'),
        enforcePrecision : require('./number/enforcePrecision')
    };

});
