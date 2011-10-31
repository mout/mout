define(function(require){

    /**
     * Basic array utilities.
     * @exports amd-utils/array
     * @author Miller Medeiros
     * @version 0.5.0 (2011/10/31)
     */
    return {
        contains    : require('./array/contains'),
        every       : require('./array/every'),
        filter      : require('./array/filter'),
        forEach     : require('./array/forEach'),
        indexOf     : require('./array/indexOf'),
        isSparse    : require('./array/isSparse'),
        lastIndexOf : require('./array/lastIndexOf'),
        map         : require('./array/map'),
        remove      : require('./array/remove'),
        removeAll   : require('./array/removeAll'),
        some        : require('./array/some'),
        unique      : require('./array/unique')
    };

});
