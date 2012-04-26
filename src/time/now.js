define(function () {

    /**
     * Get current time in miliseconds
     * @version 0.1.0 (2012/04/11)
     */
    var now = (typeof Date.now === 'function')? Date.now : function(){
        return +(new Date());
    };

    return now;

});
