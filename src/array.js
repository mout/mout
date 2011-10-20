define(function(require){

    /**
     * Basic array utilities.
     * @exports amd-utils/array
     * @author Miller Medeiros
     * @version 0.2.0 (2011/10/20)
     */
    return {
        indexOf   : require('./array/indexOf'),
        forEach   : require('./array/forEach'),
        filter    : require('./array/filter'),
        remove    : require('./array/remove'),
        removeAll : require('./array/removeAll'),
        unique    : require('./array/unique')
    };

});
