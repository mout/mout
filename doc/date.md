# date #

Date utilities.


## dayOfTheYear(date):Number

How many days elapsed since begining of the year (following gregorian
calendar).

```js
// Jan 1st
dayOfTheYear(new Date(2013, 0, 1)); // 1
// Dec 31th
dayOfTheYear(new Date(2013, 11, 31)); // 364
```



## diff(date1, date2, [unitName]):Number

Calculate the difference between dates (range).

The returned value is always positive. The default `unitName` is `"ms"`.

Available units: `year`, `month`, `week`, `day`, `hour`, `minute`, `second`,
`millisecond`.

See: [`time/convert()`](time.html#convert)

```js
var d1 = new Date(2012, 4, 5);
var d2 = new Date(2013, 4, 8);
diff(d1, d2);          // 31795200000
diff(d1, d2, 'hour');  // 8832
diff(d1, d2, 'week');  // 52.57142857142857
diff(d1, d2, 'month'); // 12.096774193548388
diff(d1, d2, 'year');  // 1.0082191780821919
```



## isLeapYear(fullYear|date):Boolean

Checks if it's a [leap year](http://en.wikipedia.org/wiki/Leap_year) according
to the Gregorian calendar.

see: [`totalDaysInMonth()`](#totalDaysInMonth)

```js
isLeapYear(2012); // true
isLeapYear(2013); // false
isLeapYear(new Date(2012, 2, 28)); // true
```


## isSame(date1, date2[, period]):Boolean

Check if both dates are the "same".

You can pass an optional *period* used to set the comparisson precision.

Available periods: `year`, `month`, `week`, `day`, `hour`, `minute`, `second`.

```js
var date1 = new Date(2013, 1, 3);
var date2 = new Date(2013, 2, 9);
isSame(date1, date2);          // false
isSame(date1, date2, 'day');   // false
isSame(date1, date2, 'month'); // false
isSame(date1, date2, 'year');  // true
```



## parseIso(str):Number

Parses an [ISO8601](http://en.wikipedia.org/wiki/Iso8601) date and returns the
number of milliseconds since January 1, 1970, 00:00:00 UTC, or `NaN` if it is
not a valid ISO8601 date.

This parses *all* ISO8601 dates, including dates without times, [ordinal
dates](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates), and the compact
representation (omitting delimeters). The only exception is [ISO week
dates](https://en.wikipedia.org/wiki/ISO_week_date), which are not parsed.

If no time zone offset is specified, it assumes UTC time.

```js
// Jan 01, 1970 00:00 GMT
parseIso('1970-01-01T00:00:00')    // 0
parseIso('1970-001')               // 0
parseIso('1970-01-01')             // 0
parseIso('19700101T000000.00')     // 0
parseIso('1970-01-01T02:00+02:00') // 0

// Jan 02, 2000 20:10 GMT+04:00
parseIso('2000-01-02T20:10+04:00') // 946829400000
```



## startOf(date, period):Date

Get a new Date at the start of the period.

Available periods: `year`, `month`, `week`, `day`, `hour`, `minute`, `second`.

```js
// Apr 05 2013 11:27:43
var date = new Date(2013, 3, 5, 11, 27, 43, 123);
startOf(date, 'year');  // Jan 01 2013 00:00:00
startOf(date, 'month'); // Apr 01 2013 00:00:00
startOf(date, 'day');   // Apr 05 2013 00:00:00
startOf(date, 'hour');  // Apr 05 2013 11:00:00
```



## timezoneOffset(date):String

Return time zone as hour and minute offset from UTC (e.g. +0900).

It's important to note that JavaScript Date object will use the system locale
info to determinate the [timezone
offset](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
and that daylight saving time affects the result.

```js
// if system locale is EST
timezoneOffset(new Date()); // -0500
```



## totalDaysInMonth(fullYear, monthIndex):Number

Returns the amount of days in the month taking into consideration leap years
(following Gregorian calendar).

see: [`isLeapYear()`](#isLeapYear)

```js
totalDaysInMonth(2008, 1); // 29 (leap year)
totalDaysInMonth(2009, 1); // 28

// you can also pass a Date object as single argument
totalDaysInMonth( new Date(2013, 0, 1) ); // 31
```


## totalDaysInYear(fullYear):Number

Returns the amount of days in the year taking into consideration leap years
(following Gregorian calendar).

see: [`isLeapYear()`](#isLeapYear), [`totalDaysInMonth()`](#totalDaysInMonth)

```js
totalDaysInYear(2008); // 366 (leap year)
totalDaysInYear(2009); // 365

// you can also pass a Date object as single argument
totalDaysInYear( new Date(2013, 0, 1) ); // 365
```


-------------------------------------------------------------------------------

For more usage examples check specs inside `/tests` folder. Unit tests are the
best documentation you can get...

