define(['../lang/toString', '../number/toInt'], function(toString, toInt){

    /**
     * Repeat string n times
     *
     * Performance improvement based on http://stackoverflow.com/questions/202605/repeat-string-javascript
     * Perf tests: http://jsfiddle.net/disfated/GejWV/
     */
     function repeat(str, n){
         var result = '';
         str = toString(str);
         n = toInt(n);
         if(n < 1) return '';
         while(n > 0) {
             //Examples of bitwise operators can be seen at
             //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
             if(n & 1) result += str;
             n >>= 1, str += str;
         };
         return result;
     }

     return repeat;

});
