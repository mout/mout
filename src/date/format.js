define([
    './i18n_',
    './quarter',
    './dayOfTheYear',
    './weekOfTheYear',
    '../number/pad',
    '../number/ordinal'
], function (i18n, quarter, dayOfTheYear, weekOfTheYear, pad, ordinal) {

    var patterns = /(y+|Y+|Q{1,4}|M{1,5}|w{1,2}|W|d{1,2}|D{1,3}|E{1,6}|e{1,6}|a|h{1,2}|H{1,2}|m{1,2}|s{1,2})/g;


    /**
     * format date based on a pattern similar to LDML Date Format
     * (supports a subset of the LDML date Format tokens)
     */
    function format(date, pattern){
        return pattern.replace(patterns, function(match){
            var token = match.slice(0, 1);
            var len = match.length;

            switch (token) {
                case 'y':
                case 'Y':
                    var fullYear = String( date.getFullYear() );
                    if (len === 2) {
                        return fullYear.slice(-2);
                    }
                    return pad(fullYear, len);
                case 'Q':
                    var q = quarter(date);
                    if (len < 3) return pad(q, len);
                    if (len === 3) return 'Q'+ q;
                    return ordinal(q) +' quarter';
                case 'M':
                    var month = date.getMonth();
                    if (len < 3) return pad(month + 1, len);
                    if (len === 3) return i18n.months_abbr[month];
                    if (len === 4) return i18n.months[month];
                    return i18n.months[month].slice(0, 1);
                case 'w':
                    return pad(weekOfTheYear(date), len);
                case 'W':
                    // TODO: implement week of month;
                    return match;
                case 'd':
                    return pad(date.getDate(), len);
                case 'D':
                    return pad(dayOfTheYear(date), len);
                case 'e':
                    if (len < 3) return String( date.getDay() + 1 );
                    /* falls through */
                case 'E':
                    var weekDay = date.getDay();
                    if (len < 4) return i18n.days_abbr[weekDay];
                    var weekDayName = i18n.days[weekDay];
                    if (len === 4) return weekDayName;
                    if (len === 5) return weekDayName.slice(0, 1);
                    return weekDayName.slice(0, 2);
                case 'a':
                    return date.getHours() >= 12? i18n.pm : i18n.am;
                case 'h':
                    var h = date.getHours() % 12;
                    return pad(!h? 12 : h, len);
                case 'H':
                    return pad(date.getHours(), len);
                case 'm':
                    return pad(date.getMinutes(), len);
                case 's':
                    return pad(date.getSeconds(), len);
            }
        });

    }

    return format;

});
