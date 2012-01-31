define(['./has'], function (has) {

    /**
     * Unset object property.
     * @author Miller Medeiros
     * @version 0.1.0 (2012/01/31)
     */
    function unset(obj, prop){
        if (has(obj, prop)) {
            var parts = prop.split('.'),
                last = parts.pop();

            while (prop = parts.shift()) {
                obj = obj[prop];
                if (typeof obj !== 'object') return true;
            }

            return (delete obj[last]);

        } else {
            // if property doesn't exist treat as deleted
            return true;
        }
    }

    return unset;

});
