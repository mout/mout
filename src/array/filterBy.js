define(['./filter', '../object/every'], function (filter, every) {

    /**
     * Return a new array with only the elements that contains the given
     * property/value pairs.
     */
    function filterBy(arr, props){
        return filter(arr, function(item){
            return every(props, function(prop, key){
                return item[key] === prop;
            });
        });
    }

    return filterBy;

});
