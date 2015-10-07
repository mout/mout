define(function () {

    /**
     * Wraps number within bounds both positive and negative
     */
    function wrap(number, min, max){
        if ( max === undefined ) {
            max = min;
            min = 0;
        }

        var difference = max - min;

        while( number >= max ) number -= difference;
        while( number < min ) number += difference;

        return number;
    }

    return wrap;

});
