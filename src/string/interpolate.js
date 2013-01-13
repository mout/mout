define(function () {

    var stache = /\{\{(\w+)\}\}/g; //mustache-like

    /**
     * String interpolation
     */
    function interpolate(template, replacements, syntax){
        var replaceFn = function(match, prop){
            return (prop in replacements)? replacements[prop] : '';
        };
        return template.replace(syntax || stache, replaceFn);
    }

    return interpolate;

});
