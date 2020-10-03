import dayOfTheYear from './dayOfTheYear';

/**
 * Return the week of the year based on given firstDayOfWeek
 */
function weekOfTheYear(date, firstDayOfWeek = 0) {
    const doy = dayOfTheYear(date);
    const dow = (7 + date.getDay() - firstDayOfWeek) % 7;
    const relativeWeekDay = 6 - firstDayOfWeek - dow;
    return Math.floor((doy + relativeWeekDay) / 7);
}

export default weekOfTheYear;
