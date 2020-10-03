import random from '../../../random/random';
const original = random.get;

// Values to return from the mocked generator
// The values should be equally split with no bias.
const values = [0.1, 0.7, 0.3, 0.45, 0.55, 0.9, 0.2, 0.35, 0.8, 0.65];
const _exports = {};

_exports.start = function(vals) {
    // you can pass the values that you expect it to generate
    vals = vals || values;
    let i = 0;
    random.get = function() {
        return vals[i++ % vals.length];
    };
};

_exports.end = function() {
    random.get = original;
};

export default _exports;
