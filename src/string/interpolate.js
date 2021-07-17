define([
    '../lang/toString',
    '../object/get'
], function(toString, get) {

    var stache = /\{\{([^\}]+)\}\}/g; //mustache-like

    /**
     * String interpolation
     */
    function interpolate(template, replacements, syntax){
        template = toString(template);
        var replaceFn = function(match, prop){
            var template = toString( get(replacements, prop) );
            return stache.test(template) ? template.replace(syntax || stache, replaceFn) :toString( get(replacements, prop) );
        };
        return template.replace(syntax || stache, replaceFn);
    }

    return interpolate;

});
