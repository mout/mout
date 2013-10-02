define([
    '../lang/toString',
    '../object/get'
], function(toString, get) {

    var stache = /\{\{([\.\w]+)\}\}/g; //mustache-like

    /**
     * String interpolation
     */
    function interpolate(template, replacements, syntax){
        template = toString(template);
        var replaceFn = function(match, prop){
            return get(replacements, prop) || '';
        };
        return template.replace(syntax || stache, replaceFn);
    }

    return interpolate;

});
