define(['./find', '../object/every'], function (find, every) {

    /**
     * Return first item that contains given properties
     */
    function findBy(arr, props){
        return find(arr, function(item){
            return every(props, function(prop, key){
                return item[key] === prop;
            });
        });
    }

    return findBy;

});
