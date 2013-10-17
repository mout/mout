define(['exports', 'mout/random/random'], function(exports, random) {
    var original = random.get;

    // Values to return from the mocked generator
    // The values should be equally split with no bias.
    var values = [0.1, 0.7, 0.3, 0.45, 0.55, 0.9, 0.2, 0.35, 0.8, 0.65];

    exports.start = function() {
        var i = 0;
        random.get = function() {
            return values[i++ % values.length];
        };
    };

    exports.end = function() {
        random.get = original;
    };

});
