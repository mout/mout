define(function(require){

    /**
     * Basic array utilities.
     * @exports amd-utils/array
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/20)
     */
    return {
        indexOf : require('./array/indexOf'),
        forEach : require('./array/forEach'),
        filter  : require('./array/filter'),
        remove  : require('./array/remove'),
        unique  : require('./array/unique')
    };

});
