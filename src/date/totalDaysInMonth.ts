import isDate from '../lang/isDate';
import isLeapYear from './isLeapYear';

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * returns the total amount of days in the month (considering leap years)
 */
function totalDaysInMonth(fullYear: number, monthIndex: number): number;
function totalDaysInMonth(fullYear: Date): number;
function totalDaysInMonth(fullYear: number | Date, monthIndex?: number): number {
    if (isDate(fullYear)) {
        monthIndex = fullYear.getMonth();
    }

    if (monthIndex === 1 && isLeapYear(fullYear)) {
        return 29;
    } else {
        return DAYS_IN_MONTH[monthIndex];
    }
}

export default totalDaysInMonth;
