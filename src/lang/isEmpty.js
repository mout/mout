define(['../object/size'], function (size) {

    function isEmpty(val){
        if ( typeof val === 'string' ) {
            return val === '';
        } else if ( typeof val === 'object' || typeof val === 'function' ) {
            // array is also an object and object/size works fine
            return size(val) === 0;
        }
        return false;
    }

    return isEmpty;

});
