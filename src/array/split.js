define(function() {

    /**
     * Split array into a fixed number of segments.
     * @version 0.1.0
     */
    function split(array, segments) {
        segments = segments || 2;

        var output = [],
            segmentLength = Math.floor(array.length / segments),
            remainder = array.length % segments,
            start = 0,
            i = 0,
            n = array.length,
            len;

        while (start < n) {
            len = i++ < remainder ? segmentLength + 1 : segmentLength;
            output.push(array.slice(start, start + len));
            start += len;
        }

        return output;
    }
    return split;
});
