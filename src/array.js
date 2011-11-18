define(function(require){

    /**
     * Basic array utilities.
     * @exports amd-utils/array
     * @author Miller Medeiros
     * @version 0.8.0 (2011/11/17)
     */
    return {
        'compact'     : require('./array/compact'),
        'contains'    : require('./array/contains'),
        'every'       : require('./array/every'),
        'filter'      : require('./array/filter'),
        'forEach'     : require('./array/forEach'),
        'indexOf'     : require('./array/indexOf'),
        'isSparse'    : require('./array/isSparse'),
        'lastIndexOf' : require('./array/lastIndexOf'),
        'map'         : require('./array/map'),
        'range'       : require('./array/range'),
        'reduce'      : require('./array/reduce'),
        'reduceRight' : require('./array/reduceRight'),
        'remove'      : require('./array/remove'),
        'removeAll'   : require('./array/removeAll'),
        'some'        : require('./array/some'),
        'unique'      : require('./array/unique')
    };

});
