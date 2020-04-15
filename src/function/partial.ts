import indexOf from '../array/indexOf';
import slice from '../array/slice';
import take from '../array/take';

const _ = {};

/**
 * Creates a partially applied function.
 */
function partial(f) {
    const as = slice(arguments, 1);
    const has_ = indexOf(as, _) !== -1;

    return function() {
        const rest = slice(arguments);

        // Don't waste time checking for placeholders if there aren't any.
        const args = has_ ?
            take(as.length, function(i) {
                const a = as[i];
                return a === _ ? rest.shift() : a;
            }) :
            as;

        return f.apply(this, rest.length ? args.concat(rest) : args);
    };
}

partial._ = _;

export default partial;
