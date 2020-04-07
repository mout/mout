import toString from '../lang/toString';
import get from '../object/get';

    var stache = /\{\{([^\}]+)\}\}/g; //mustache-like

    /**
     * String interpolation
     */
    function interpolate(template, replacements, syntax){
        template = toString(template);
        var replaceFn = function(match, prop){
            return toString( get(replacements, prop) );
        };
        return template.replace(syntax || stache, replaceFn);
    }

    export default interpolate;


