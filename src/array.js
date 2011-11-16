define(function(require){

    /**
     * Basic array utilities.
     * @exports amd-utils/array
     * @author Miller Medeiros
     * @version 0.7.0 (2011/11/15)
     */
    return {
        'compact'     : require('./array/compact'),
        'contains'    : require('./array/contains'),
        'every'       : require('./array/every'),
        'filter'      : require('./array/filter'),
        'forEach'     : require('./array/forEach'),
        'indexOf'     : require('./array/indexOf'),
        'isSparse'    : require('./array/isSparse'),
        'join'        : require('./array/join'),
        'lastIndexOf' : require('./array/lastIndexOf'),
        'map'         : require('./array/map'),
        'reduce'      : require('./array/reduce'),
        'reduceRight' : require('./array/reduceRight'),
        'remove'      : require('./array/remove'),
        'removeAll'   : require('./array/removeAll'),
        'some'        : require('./array/some'),
        'unique'      : require('./array/unique')
    };

});
