define(function (require) {

    /**
     * Pseudo-random generators.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/11/17)
     */
    return {
        choice   : require('./random/choice'),
        rand     : require('./random/rand'),
        randBit  : require('./random/randBit'),
        randInt  : require('./random/randInt'),
        randSign : require('./random/randSign')
    };

});
