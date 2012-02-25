define(function () {

    /**
     * Converts number into currency format
     * @version 0.3.0 (2012/01/09)
     */
    function currencyFormat(val, nDecimalDigits, decimalSeparator, thousandsSeparator){
        //default values
        nDecimalDigits = nDecimalDigits == null? currencyFormat.nDecimalDigits : nDecimalDigits;
        decimalSeparator = decimalSeparator || currencyFormat.decimalSeparator;
        thousandsSeparator = thousandsSeparator || currencyFormat.thousandsSeparator;

        //can't use enforce precision since it returns a number and we are
        //doing a RegExp over the string
        var fixed = val.toFixed(nDecimalDigits),
            parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{'+ nDecimalDigits +'}))?$').exec( fixed ); //separate begin [$1], middle [$2] and decimal digits [$4]

        if(parts){ //val >= 1000 || val <= -1000
            return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
        }else{
            return fixed.replace('.', decimalSeparator);
        }
    }

    //so user can set their own defaults
    //(functions beeing 1st class objects rocks..)
    currencyFormat.nDecimalDigits = 2;
    currencyFormat.decimalSeparator = '.';
    currencyFormat.thousandsSeparator = ',';

    return currencyFormat;

});
