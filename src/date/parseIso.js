define(['../array/some'], function (some) {

    var datePatterns = [
        /^([0-9]{4})$/,                        // YYYY
        /^([0-9]{4})-([0-9]{2})$/,             // YYYY-MM (YYYYMM not allowed)
        /^([0-9]{4})-?([0-9]{2})-?([0-9]{2})$/ // YYYY-MM-DD or YYYYMMDD
    ];
    var ORD_DATE = /^([0-9]{4})-?([0-9]{3})$/; // YYYY-DDD

    var timePatterns = [
        /^([0-9]{2}(?:\.[0-9]*)?)$/,                      // HH.hh
        /^([0-9]{2}):?([0-9]{2}(?:\.[0-9]*)?)$/,          // HH:MM.mm
        /^([0-9]{2}):?([0-9]{2}):?([0-9]{2}(\.[0-9]*)?)$/ // HH:MM:SS.ss
    ];

    var DATE_TIME = /^(.+)T(.+)$/;
    var TIME_ZONE = /^(.+)([+\-])([0-9]{2}):?([0-9]{2})$/;

    function matchAll(str, patterns) {
        var match;
        var found = some(patterns, function(pattern) {
            return !!(match = pattern.exec(str));
        });

        return found ? match : null;
    }

    function getDate(year, month, day) {
        var date = new Date(Date.UTC(year, month, day));
        var valid =
            date.getUTCFullYear() === year &&
            date.getUTCMonth() === month &&
            date.getUTCDate() === day;
        return valid ? +date : NaN;
    }

    function parseOrdinalDate(str) {
        var match = ORD_DATE.exec(str);
        if (match ) {
            var year = +match[1],
                day = +match[2],
                date = new Date(Date.UTC(year, 0, day));

            if (date.getUTCFullYear() === year) {
                return +date;
            }
        }

        return NaN;
    }

    function parseDate(str) {
        var match, year, month, day;

        var match = matchAll(str, datePatterns);
        if (match === null) {
            // Ordinal dates are verified differently.
            return parseOrdinalDate(str);
        }

        year = (match[1] === void 0) ? 0 : +match[1];
        month = (match[2] === void 0) ? 0 : +match[2] - 1;
        day = (match[3] === void 0) ? 1 : +match[3];

        return getDate(year, month, day);
    }

    function parseTime(str) {
        var match, isValid;

        var offset;
        if (str.charAt(str.length - 1) === 'Z') {
            // `Z` denotes GMT time
            offset = 0;
            str = str.substring(0, str.length - 1);
        } else if ((match = TIME_ZONE.exec(str))) {
            str = match[1];
            var offsetHours = +match[3],
                offsetMinutes = (match[4] === void 0) ? 0 : +match[4];

            isValid =
                offsetHours <= 24 && offsetHours >= 0 &&
                offsetMinutes < 60 && offsetMinutes >= 0 &&
                (offsetHours !== 24 || offsetMinutes === 0);
            if (!isValid) {
                return NaN;
            }

            offset = (offsetHours * 60 + offsetMinutes) * 60 * 1000;
            if (match[2] === '-') {
                offset *= -1;
            }
        } else {
            offset = 0;
        }

        match = matchAll(str, timePatterns);
        if (match === null) {
            return NaN;
        }

        var hours = (match[1] === void 0) ? 0 : +match[1],
            minutes = (match[2] === void 0) ? 0 : +match[2],
            seconds = (match[3] === void 0) ? 0 : +match[3];

        var isValid =
            hours <= 24 && hours >= 0 &&
            minutes < 60 && minutes >= 0 &&
            seconds < 60 && seconds >= 0 &&
            (hours !== 24 || (minutes === 0 && seconds === 0));

        if (!isValid) {
            return NaN;
        }

        var time = ((hours * 60 + minutes) * 60 + seconds) * 1000;
        time -= offset;

        return time;
    }

    /**
     * Parse an ISO8601 formatted date string, and return a Date object.
     */
    function parseISO8601(str){
        var match = DATE_TIME.exec(str);
        if (!match) {
            return parseDate(str);
        }

        var date = parseDate(match[1]);
        if (isNaN(date)) {
            return date;
        }

        var time = parseTime(match[2]);
        if (isNaN(time)) {
            return time;
        }

        return date + time;
    }

    return parseISO8601;

});
