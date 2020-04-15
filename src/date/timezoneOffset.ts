import pad from '../number/pad';

/**
 * time zone as hour and minute offset from UTC (e.g. +0900)
 */
function timezoneOffset(date) {
    const offset = date.getTimezoneOffset();
    const abs = Math.abs(offset);
    const h = pad(Math.floor(abs / 60), 2);
    const m = pad(abs % 60, 2);
    return (offset > 0 ? '-' : '+') + h + m;
}

export default timezoneOffset;
