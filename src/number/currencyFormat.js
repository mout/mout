define(function () {

    /**
     * Converts number into currency format
     * @version 0.2.0 (2012/01/09)
     */
    function currencyFormat(val, decimalSeparator, thousandsSeparator, nDecimalDigits){
        //default values
        decimalSeparator = decimalSeparator || '.';
        thousandsSeparator = thousandsSeparator || ',';
        nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;

        var fixed = val.toFixed(nDecimalDigits),
            parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{'+ nDecimalDigits +'}))?$').exec( fixed ); //separate begin [$1], middle [$2] and decimal digits [$4]

        if(parts){ //val >= 1000 || val <= -1000
            return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
        }else{
            return fixed.replace('.', decimalSeparator);
        }
    }

    return currencyFormat;

});
