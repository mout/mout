import unique from './unique';
import append from './append';

    /**
     * Concat multiple arrays and remove duplicates
     */
    function union(arrs) {
        var results = [];
        var i = -1, len = arguments.length;
        while (++i < len) {
            append(results, arguments[i]);
        }

        return unique(results);
    }

    export default union;


