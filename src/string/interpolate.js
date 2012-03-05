define(function () {

    var stache = /\{\{(\w+)\}\}/g; //mustache-like

    /**
     * String interpolation
     * @version 0.1.0 (2012/03/05)
     */
    function interpolate(template, replacements, syntax){
        var replaceFn = function(match, prop){
            return (prop in replacements)? replacements[prop] : '';
        };
        return template.replace(syntax || stache, replaceFn);
    }

    return interpolate;

});
