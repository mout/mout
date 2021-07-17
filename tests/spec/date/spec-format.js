define(['mout/date/format'], function(format){

    describe('date/format', function(){

        var date = new Date(2013, 3, 8, 9, 2, 4);

        // need to make sure we always have same timezoneOffset
        date.getTimezoneOffset = function(){
            return 0;
        };


        describe('year', function () {

            describe('y+ : Year', function () {
                it('should display year for "y+"', function(){
                    expect( format(date, 'y') ).toBe('2013');
                    expect( format(date, 'yyy') ).toBe('2013');
                    expect( format(date, 'yyyy') ).toBe('2013');
                    expect( format(date, 'yyyyyy') ).toBe('002013');
                });

                it('should limit digits with "yy"', function () {
                    // yes, it's the only one that limits the amount of digits
                    expect( format(date, 'yy') ).toBe('13');
                });
            });


            describe('Y+ : Year (in "week of year")', function () {
                // XXX: couldn't really find enough info to implement it
                // properly, not sure what the "week of year based calendar"
                // means so we are using same implementation as "y"
                it('should display year for "Y+"', function(){
                    expect( format(date, 'Y') ).toBe('2013');
                    expect( format(date, 'YYY') ).toBe('2013');
                    expect( format(date, 'YYYY') ).toBe('2013');
                    expect( format(date, 'YYYYYY') ).toBe('002013');
                });

                it('should limit digits with "YY"', function () {
                    // yes, it's the only one that limits the amount of digits
                    expect( format(date, 'YY') ).toBe('13');
                });
            });

        });


        describe('quarter', function () {

            describe('Q{1,4} : Quarter', function () {

                it('should return numeric quarter if "Q" or "QQ"', function () {
                    expect( format(date, 'Q') ).toEqual( '2' );
                    expect( format(date, 'QQ') ).toEqual( '02' );
                });

                it('should return abbreviation for "QQQ"', function () {
                    expect( format(date, 'QQQ') ).toEqual( 'Q2' );
                });

                it('should return full name for "QQQQ"', function () {
                    expect( format(date, 'QQQQ') ).toEqual( '2nd quarter' );
                });

            });

        });


        describe('month', function () {

            describe('M{1,5} : Month', function () {
                it('should return numeric month if "M" or "MM"', function () {
                    expect( format(date, 'M') ).toEqual( '4' );
                    expect( format(date, 'MM') ).toEqual( '04' );
                });

                it('should return abbreviation if "MMM"', function () {
                    expect( format(date, 'MMM') ).toEqual( 'Apr' );
                });

                it('should return full name if "MMMM"', function () {
                    expect( format(date, 'MMMM') ).toEqual( 'April' );
                });

                it('should return single char if "MMMMM"', function () {
                    expect( format(date, 'MMMMM') ).toEqual( 'A' );
                });
            });

        });


        describe('week', function () {

            describe('w : week of year', function () {
                it('should return week of the year for "w" and "ww"', function () {
                    expect( format(date, 'w') ).toEqual( '14' );
                    expect( format(date, 'ww') ).toEqual( '14' );
                });
            });

            // FIXME: implement week of month
            // describe('W : week of month', function () {
                // it('should return week of the month for "W"', function () {
                    // expect( format(date, 'W') ).toEqual( '2' );
                // });
            // });

        });


        describe('day', function () {

            describe('d : Date - day of the month', function () {
                it('should return day of the month for "d" and "dd"', function () {
                    expect( format(date, 'd') ).toEqual( '8' );
                    expect( format(date, 'dd') ).toEqual( '08' );
                });
            });

            describe('D : Day of year', function () {
                it('should return day of year for "D", "DD" and "DDD"', function () {
                    expect( format(date, 'D') ).toEqual( '98' );
                    expect( format(date, 'DD') ).toEqual( '98' );
                    expect( format(date, 'DDD') ).toEqual( '098' );
                });
            });

        });


        describe('week day', function () {

            describe('E : Day of week', function () {
                it('should return abbreviation for "E", "EE" and "EEE"', function () {
                    //XXX: not sure if proper format
                    expect( format(date, 'E') ).toEqual( 'Mon' );
                    expect( format(date, 'EE') ).toEqual( 'Mon' );
                    expect( format(date, 'EEE') ).toEqual( 'Mon' );
                });

                it('should return full name for "EEEE"', function () {
                    expect( format(date, 'EEEE') ).toEqual( 'Monday' );
                });

                it('should return narrow name for "EEEEE"', function () {
                    expect( format(date, 'EEEEE') ).toEqual( 'M' );
                });

                it('should return narrow name for "EEEEEE"', function () {
                    expect( format(date, 'EEEEEE') ).toEqual( 'Mo' );
                });
            });


            describe('e - Local day of week', function () {
                it('should return numeric value 1..7 (week starts on Sunday)', function () {
                    //XXX: this is supposed to use current locale info
                    expect( format(date, 'e') ).toEqual( '2' );
                    expect( format(date, 'ee') ).toEqual( '2' );
                });

                it('should return abbreviation for "e", "ee" and "eee"', function () {
                    //XXX: not sure if proper format
                    expect( format(date, 'eee') ).toEqual( 'Mon' );
                });

                it('should return full name for "eeee"', function () {
                    expect( format(date, 'eeee') ).toEqual( 'Monday' );
                });

                it('should return narrow name for "eeeee"', function () {
                    expect( format(date, 'eeeee') ).toEqual( 'M' );
                });

                it('should return narrow name for "eeeeee"', function () {
                    expect( format(date, 'eeeeee') ).toEqual( 'Mo' );
                });
            });

        });


        describe('period', function () {
            describe('a : AM or PM', function () {
                it('should return AM or PM for "a"', function () {
                    expect( format(date, 'a') ).toEqual( 'AM' );
                });
            });
        });


        describe('hour', function () {

            describe('h : hour [1-12]', function () {
                it('should return 12h hours for "h" and "hh"', function () {
                    expect( format(date, 'h') ).toEqual( '9' );
                    expect( format(date, 'hh') ).toEqual( '09' );
                });
            });

            describe('H : hour [0-23]', function () {
                it('should return 24h hours for "H" and "HH"', function () {
                    expect( format(date, 'H') ).toEqual( '9' );
                    expect( format(date, 'HH') ).toEqual( '09' );
                });
            });

        });


        describe('minute', function () {
            describe('m : minute', function () {
                it('should return minutes for "m" and "mm"', function () {
                    expect( format(date, 'm') ).toEqual( '2' );
                    expect( format(date, 'mm') ).toEqual( '02' );
                });
            });
        });


        describe('second', function () {
            describe('s : seconds', function () {
                it('should return seconds for "s" and "ss"', function () {
                    expect( format(date, 's') ).toEqual( '4' );
                    expect( format(date, 'ss') ).toEqual( '04' );
                });
            });
        });


    });

});
