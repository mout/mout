define(['mout/date/strftime'], function(strftime){

    describe('date/strftime', function(){

        var date = new Date(2013, 3, 8, 9, 2, 4);
        var date_2 = new Date(2002, 11, 18, 19, 22, 43);

        // need to make sure we always have same timezoneOffset
        date.getTimezoneOffset = date_2.getTimezoneOffset = function(){
            return 0;
        };


        it('should return abbreviated week day name on %a', function(){
            expect( strftime(date, '%a') ).toBe('Mon');
            expect( strftime(date_2, '%a') ).toBe('Wed');
        });

        it('should return full week day name for %A', function () {
            expect( strftime(date, '%A') ).toBe('Monday');
            expect( strftime(date_2, '%A') ).toBe('Wednesday');
        });

        it('should return abbreviated month for %b and %h', function () {
            expect( strftime(date, '%b') ).toBe('Apr');
            expect( strftime(date, '%h') ).toBe('Apr');
            expect( strftime(date_2, '%b') ).toBe('Dec');
            expect( strftime(date_2, '%h') ).toBe('Dec');
        });

        it('should return full month name for %B', function () {
            expect( strftime(date, '%B') ).toBe('April');
            expect( strftime(date_2, '%B') ).toBe('December');
        });

        it('should return locale datetime representation for %c', function () {
            var d1 = new Date(+date);
            d1.toString = function(){
                return 'Mon Apr 08 2013 09:02:04 GMT-0300 (BRT)';
            };
            expect( strftime(d1, '%c') ).toEqual('Mon 08 Apr 2013 09:02:04 AM BRT');

            var d2 = new Date(+date_2);
            d2.toString = function(){
                return 'Wed Dec 18 2002 19:22:43 GMT-0200 (BRST)';
            };
            expect( strftime(d2, '%c') ).toEqual('Wed 18 Dec 2002 07:22:43 PM BRST');
        });

        it('should return the century number for %C', function () {
            expect( strftime(date, '%C') ).toBe('20');
        });

        it('should return zero-padded day of the month on %d', function () {
            expect( strftime(date, '%d') ).toBe('08');
            expect( strftime(date_2, '%d') ).toBe('18');
        });

        it('should return Date on %D and on %x', function () {
            expect( strftime(date, '%D') ).toEqual('04/08/13');
            expect( strftime(date_2, '%D') ).toEqual('12/18/02');
            expect( strftime(date, '%x') ).toEqual('04/08/13');
            expect( strftime(date_2, '%x') ).toEqual('12/18/02');
        });

        it('should return blank-padded day of the month on %e', function () {
            expect( strftime(date, '%e') ).toBe(' 8');
            expect( strftime(date_2, '%e') ).toBe('18');
        });

        it('should return ISO 8601 date format for %F', function () {
            expect( strftime(date, '%F') ).toBe('2013-04-08');
            expect( strftime(date_2, '%F') ).toBe('2002-12-18');
        });

        it('should return zero-padded hour (24h) for %H', function () {
            expect( strftime(date, '%H') ).toBe('09');
            expect( strftime(date_2, '%H') ).toBe('19');
        });

        it('should return zero-padded hour (12h) for %H', function () {
            expect( strftime(date, '%I') ).toBe('09');
            expect( strftime(date_2, '%I') ).toBe('07');
        });

        it('should return single space padded hour (12h) for %l if <10', function () {
            expect( strftime(date, '%l') ).toBe(' 9');
            expect( strftime(date_2, '%l') ).toBe(' 7');
        });

        it('should return day of the year for %j', function () {
            expect( strftime(date, '%j') ).toEqual( '098' );
            expect( strftime(date_2, '%j') ).toEqual( '352' );

        });

        it('should return zero-padded milliseconds for %L', function () {
            expect( strftime(date, '%L') ).toBe('000');
            expect( strftime({
                getMilliseconds:function(){
                    return 55;
                }
            }, '%L') ).toBe('055');
        });

        it('should return zero-padded month for %m', function () {
            expect( strftime(date, '%m') ).toBe('04');
            expect( strftime(date_2, '%m') ).toBe('12');
        });

        it('should return zero-padded minutes for %M', function () {
            expect( strftime(date, '%M') ).toBe('02');
            expect( strftime(date_2, '%M') ).toBe('22');
        });

        it('should return newline char for %n', function () {
            expect( strftime(date, '%n') ).toBe('\n');
        });

        it('should return AM/PM for %p', function () {
            expect( strftime(date, '%p') ).toBe('AM');
            expect( strftime(date_2, '%p') ).toBe('PM');
        });

        it('should return lowercase am/pm for %p', function () {
            expect( strftime(date, '%P') ).toBe('am');
            expect( strftime(date_2, '%P') ).toBe('pm');
        });

        it('should return 12-hour time (%I:%M:%S %p) for %r', function () {
            expect( strftime(date, '%r') ).toBe('09:02:04 AM');
            expect( strftime(date_2, '%r') ).toBe('07:22:43 PM');
        });

        it('should return 24-hour time (%H:%M) for %R', function () {
            expect( strftime(date, '%R') ).toBe('09:02');
            expect( strftime(date_2, '%R') ).toBe('19:22');
        });

        it('should return number of seconds since epoch for %s', function () {
            expect( strftime(date, '%s') ).toBe( String(date / 1000) );
        });

        it('should return zero-padded seconds for %S', function () {
            expect( strftime(date, '%S') ).toBe('04');
            expect( strftime(date_2, '%S') ).toBe('43');
        });

        it('should return tab char for %t', function () {
            expect( strftime(date, '%t') ).toBe('\t');
        });

        it('should return 24-hour time (%H:%M:%S) for %T and %X', function () {
            expect( strftime(date, '%T') ).toBe('09:02:04');
            expect( strftime(date, '%X') ).toBe('09:02:04');
        });

        it('should return Weekday as a decimal number (Sunday is 7) for %u', function () {
            expect( strftime(date, '%u') ).toBe('1');
            expect( strftime(date_2, '%u') ).toBe('3');
            expect( strftime(new Date(2013, 3, 7), '%u') ).toBe('7');
        });

        it('should return week number of the year, starting at Sunday for %U', function () {
            expect( strftime(new Date(2013, 0, 5), '%U') ).toEqual( '00' );
            expect( strftime(new Date(2013, 0, 6), '%U') ).toEqual( '01' );
            expect( strftime(date, '%U') ).toEqual( '14' );
            expect( strftime(date_2, '%U') ).toEqual( '50' );
        });

        it('should return Weekday as a decimal number (Sunday is 0) for %w', function () {
            expect( strftime(date, '%w') ).toBe('1');
            expect( strftime(date_2, '%w') ).toBe('3');
            expect( strftime(new Date(2013, 3, 7), '%w') ).toBe('0');
        });

        it('should return week number of the year, starting at Monday for %W', function () {
            expect( strftime(new Date(2013, 0, 6), '%W') ).toEqual( '00' );
            expect( strftime(new Date(2013, 0, 7), '%W') ).toEqual( '01' );
            expect( strftime(date, '%W') ).toEqual( '14' );
            expect( strftime(date_2, '%W') ).toEqual( '50' );
        });

        it('should return year without century for %y', function () {
            expect( strftime(date, '%y') ).toBe('13');
            expect( strftime(date_2, '%y') ).toBe('02');
        });

        it('should return year with century for %Y', function () {
            expect( strftime(date, '%Y') ).toBe('2013');
            expect( strftime(date_2, '%Y') ).toBe('2002');
        });

        it('should return timezone offset for %z', function () {
            expect( strftime(date, '%z') ).toEqual('+0000');
            expect( strftime({
                getTimezoneOffset : function(){
                    return 210;
                }
            }, '%z') ).toBe('-0330');
            expect( strftime({
                getTimezoneOffset : function(){
                    return -210;
                }
            }, '%z') ).toBe('+0330');
        });

        it('should return timezone abbreviation for %Z', function () {
            // note that result will vary based on the browser
            // and user system so we "fake it" during the tests and fallback
            // to timezoneOffset in case we can't extract the TZ from the
            // Date.toString()
            // chrome 28 / FF 18: 'Mon Apr 08 2013 09:02:04 GMT-0300 (BRT)'
            // IE7: 'Mon Apr 8 09:02:04 UTC-0300 2013'

            expect( strftime({
                toString : function(){
                    return 'Mon Apr 08 2013 09:02:04 GMT-0300 (BRT)';
                }
            }, '%Z') ).toEqual('BRT');

            expect( strftime({
                getTimezoneOffset : function(){
                    return 180;
                },
                toString : function(){
                    return 'Mon Apr 8 09:02:04 UTC-0300 2013';
                }
            }, '%Z') ).toEqual('-0300');
        });


        it('should support escaping %%', function () {
            expect( strftime(date, '%%') ).toEqual('%');
        });

        it('should support multiple tokens at once', function () {
            // iso8601
            expect( strftime(date, '%Y-%m-%dT%H:%M:%S%z') ).toEqual( '2013-04-08T09:02:04+0000' );
        });

        it('should support custom locale', function () {

             var ptBr = {
                "months" : ["Janeiro", "Fevereiro", "Março", "Abril",
                    "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro",
                    "Novembro", "Dezembro"],
                "months_abbr" : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
                    "Jul", "Ago", "Set", "Out", "Nov", "Dec"],
                "days" : ["Domingo", "Segunda", "Terça", "Quarta", "Quinta",
                    "Sexta", "Sábado"],
                "days_abbr" : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
            };

            expect( strftime(date, '%a, %d %b', ptBr) ).toEqual( 'Seg, 08 Abr' );
            expect( strftime(date, '%A, %d %B', ptBr) ).toEqual( 'Segunda, 08 Abril' );
        });


    });

});
