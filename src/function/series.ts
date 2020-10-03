/**
 * Returns a function that will execute a list of functions in sequence
 * passing the same arguments to each one. (useful for batch processing
 * items during a forEach loop)
 */
function series() {
    const fns = arguments;
    return function() {
        let i = 0;
        const n = fns.length;
        while (i < n) {
            fns[i].apply(this, arguments);
            i += 1;
        }
    };
}

export default series;
