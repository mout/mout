import indexOf from '../array/indexOf';
import take from '../array/take';

const _ = {};

/**
 * Creates a partially applied function.
 */
function partial(f, ...outerArgs) {
    const has_ = indexOf(outerArgs, _) !== -1;

    return function(...rest) {
        // Don't waste time checking for placeholders if there aren't any.
        const args = has_
            ? take(outerArgs.length, function(i) {
                  const a = outerArgs[i];
                  return a === _ ? rest.shift() : a;
              })
            : outerArgs;

        return f.apply(this, rest.length ? args.concat(rest) : args);
    };
}

partial._ = _;

export default partial;
