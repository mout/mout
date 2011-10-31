define(function(require){

    /**
     * Language Utilities. Easier inheritance and scope handling.
     * @exports amd-utils/lang
     * @author Miller Medeiros
     * @version 0.3.0 (2011/10/31)
     */
    return {
        bind             : require('./lang/bind'),
        createObject     : require('./lang/createObject'),
        inheritPrototype : require('./lang/inheritPrototype'),
        isArguments      : require('./lang/isArguments'),
        isArray          : require('./lang/isArray'),
        isBoolean        : require('./lang/isBoolean'),
        isDate           : require('./lang/isDate'),
        isFunction       : require('./lang/isFunction'),
        isKind           : require('./lang/isKind'),
        isNull           : require('./lang/isNull'),
        isNumber         : require('./lang/isNumber'),
        isObject         : require('./lang/isObject'),
        isRegExp         : require('./lang/isRegExp'),
        isString         : require('./lang/isString'),
        isUndefined      : require('./lang/isUndefined'),
        kindOf           : require('./lang/kindOf'),
        mixIn            : require('./lang/mixIn'),
        toArray          : require('./lang/toArray')
    };

});
