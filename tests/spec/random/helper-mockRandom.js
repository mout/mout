define(['mout/random/random'], function(random) {
    var original;

    function mockRandom() {
        original = random.get;

        var i = 0;
        var reps = 0;
        // Mock random number generator
        // This makes large variations between each call, gradually shifting to
        // cover a wider range
        //
        // Starts at 0.9, then ~0.1, then ~0, then ~0.2
        random.get = function() {
            i = (i + ((reps % 2 === 0) ? 0.9 : 0.2) + reps * 0.001) % 1;
            reps++;
            return i;
        };
    }

    mockRandom.end = function() {
        if (!original) {
            throw new Error('Invalid mockRandom.end()');
        }

        random.get = original;
        original = null;
    };

    return mockRandom;
});
