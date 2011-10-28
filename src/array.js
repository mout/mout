define(function(require){

    /**
     * Basic array utilities.
     * @exports amd-utils/array
     * @author Miller Medeiros
     * @version 0.3.0 (2011/10/28)
     */
    return {
        filter    : require('./array/filter'),
        forEach   : require('./array/forEach'),
        indexOf   : require('./array/indexOf'),
        isSparse  : require('./array/isSparse'),
        remove    : require('./array/remove'),
        removeAll : require('./array/removeAll'),
        unique    : require('./array/unique')
    };

});
