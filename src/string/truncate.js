define(['./trim'], function(trim){
    /**
    * Limit number of chars.
    * @example truncate('lorem ipsum dolor sit amet', 10) -> 'lorem...'
    * @param {string} str
    * @param {number} [maxChars] Default to 125 chars. (including append.length)
    * @param {string} [append] Default to '...'
    * @return {string}
    * @version 0.2.0 (2011/08/09)
    * @author Miller Medeiros
    */
    function truncate(str, maxChars, append){
        maxChars = maxChars || 125;
        append = append || '...';

        str = trim(str);
        if(str.length <= maxChars){
            return str;
        }
        str = str.substr(0, maxChars - append.length + 1);
        str = str.substr(0, str.lastIndexOf(' ')); //crop at last space
        return str + append;
    }
    return truncate;
});
