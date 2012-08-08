# amd-utils / financial #

Financial math helpers.



## compoundInterest(interestRate, nPeriods, presentValue):Number

Calculates [compount
interest](http://en.wikipedia.org/wiki/Future_value#Compound_interest) over
a period.

```js
compoundInterest(0.1, 3, 100); // 133.1
```



## futureValue(rate, nPeriods, payment[, presentValue, isDue]):Number

Calculate the future value of an investment based on periodic, constant
payments at a constant interest rate. (aka.
[annuity](http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29)) - Works
similarly to Microsoft Excel `FV()` function.

Payments are made at the end of each period by default, set `isDue` to `true`
if payments should be made at the beginning of each period.

See: [`presentValue()`](#presentValue)

```js
futureValue(0.12, 12, 1000);            // 24133.13
futureValue(0.12, 12, 1000, 0, true);   // 27029.11
futureValue(0.12, 12, 1000, 500);       // 26081.12
futureValue(0.12, 12, 1000, 500, true); // 28977.10
```



## npv(discountRate, values):Number

Calculates the [net present value](http://en.wikipedia.org/wiki/Net_present_value).

```js
npv(0.1, [-100, 30, 35, 28, 46]); // 7.867073163159489
npv(0.1, [30, 35, 28, 46]) - 100; // 8.653780479475415
```



## payment(rate, nPeriods, presentValue, futureValue, isDue):Number

Calculates the payment for a loan based on constant payments and a constant
interest rate. Similar to Microsoft Excel `PMT()` function. (aka. mortgage or
[annuity](http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29))

```js
payment(0.05, 10, 1000);    // 129.50457496545667
payment(0.05, 10, 0, 1000); // 79.50457496545668
```



## presentValue(rate, nPeriods, payment[, futurevalue, isDue]):Number

Returns the present value of an investment. The present value is the total
amount that a series of future payments is worth now  (aka.
[annuity](http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29)). - Works
similarly to Microsoft Excel `PV()` function.

Payments are made at the end of each period by default, set `isDue` to `true`
if payments should be made at the beginning of each period.

See: [`futureValue()`](#futureValue)

```js
presentValue(0.12, 12, 1000);          // 6194.37
presentValue(0.12, 12, 1000, 0, true); // 6937.70
```

