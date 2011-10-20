define(function(require){

    /**
     * Language Utilities. Easier inheritance and scope handling.
     * @exports amd-utils/lang
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/20)
     */
    return {
        mixIn            : require('./lang/mixIn'),
        inheritPrototype : require('./lang/inheritPrototype'),
        createObject     : require('./lang/createObject'),
        bind             : require('./lang/bind')
    };

});
