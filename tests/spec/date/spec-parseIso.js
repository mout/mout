define(['mout/date/parseIso'], function(parseIso){

    describe('date/parseIso', function(){

        it('should parse date YYYY', function(){
            var date = Date.UTC(2000, 0, 1, 0, 0, 0, 0);
            expect( parseIso('2000') ).toEqual(date);
        });

        it('should parse date YYYY-MM', function(){
            var date = Date.UTC(2000, 9, 1, 0, 0, 0, 0);
            expect( parseIso('2000-10') ).toEqual(date);
        });

        it('should parse date YYYY-MM-DD', function(){
            var date = Date.UTC(2000, 9, 11, 0, 0, 0, 0);
            expect( parseIso('2000-10-11') ).toEqual(date);
        });

        it('should parse date YYYYMMDD', function(){
            var date = Date.UTC(2000, 9, 11, 0, 0, 0, 0);
            expect( parseIso('20001011') ).toEqual(date);
        });

        it('should parse ordinal date YYYY-DDD', function(){
            var date = Date.UTC(2000, 0, 123, 0, 0, 0, 0);
            expect( parseIso('2000-123') ).toEqual(date);
        });

        it('should parse date and time YYYY-MM-DDTHH', function() {
            var date = Date.UTC(2000, 9, 11, 13, 0, 0, 0);
            expect( parseIso('2000-10-11T13') ).toEqual(date);
        });

        it('should parse date and time YYYY-MM-DDTHH:MM', function() {
            var date = Date.UTC(2000, 9, 11, 13, 59, 0, 0);
            expect( parseIso('2000-10-11T13:59') ).toEqual(date);
        });

        it('should parse date and time YYYYMMDDTHHMM', function() {
            var date = Date.UTC(2000, 9, 11, 13, 59, 0, 0);
            expect( parseIso('20001011T1359') ).toEqual(date);
        });

        it('should parse date and time YYYY-MM-DDTHH:MM:SS', function() {
            var date = Date.UTC(2000, 9, 11, 13, 59, 30, 0);
            expect( parseIso('2000-10-11T13:59:30') ).toEqual(date);
        });

        it('should parse date and time YYYY-MM-DDTHHMMSS', function(){
            var date = Date.UTC(2000, 9, 11, 13, 59, 30, 0);
            expect( parseIso('2000-10-11T135930') ).toEqual(date);
        });

        it('should parse fractions of hours', function(){
            var date = Date.UTC(2000, 9, 11, 13, 30, 0, 0);
            expect( parseIso('2000-10-11T13.5') ).toEqual(date);
        });

        it('should parse fractions of minutes', function(){
            var date = Date.UTC(2000, 9, 11, 13, 30, 30, 0);
            expect( parseIso('2000-10-11T13:30.5') ).toEqual(date);
        });

        it('should parse fractions of seconds', function(){
            var date = Date.UTC(2000, 9, 11, 13, 30, 30, 500);
            expect( parseIso('2000-10-11T13:30:30.5') ).toEqual(date);
        });

        it('should allow fractions of milliseconds', function(){
            // Date.UTC does not allow fractions of ms, so add on to the
            // calculated date.
            var date = Date.UTC(2000, 9, 11, 13, 30, 30, 543) + 0.21
            expect( parseIso('2000-10-11T13:30:30.54321') ).toEqual(date);
        });

        it('should allow 24:00 for midnight', function(){
            var date = Date.UTC(2000, 9, 12, 0, 0, 0, 0);
            expect( parseIso('2000-10-11T24:00') ).toEqual(date);
        });

        it('should allow 00:00 for midnight', function(){
            var date = Date.UTC(2000, 9, 11, 0, 0, 0, 0);
            expect( parseIso('2000-10-11T00:00') ).toEqual(date);
        });

        it('should parse Z for GMT time', function(){
            var date = Date.UTC(2000, 9, 11, 12, 0, 0, 0);
            expect( parseIso('2000-10-11T12:00Z') ).toEqual(date);
        });

        it('should parse +00:00 for GMT time', function(){
            var date = Date.UTC(2000, 9, 11, 12, 0, 0, 0);
            expect( parseIso('2000-10-11T12:00+00:00') ).toEqual(date);
        });

        it('should parse time zone offset +HH:MM', function(){
            var date = Date.UTC(2000, 9, 11, 8, 0, 0, 0);
            expect( parseIso('2000-10-11T12:00+04:00') ).toEqual(date);
        });

        it('should parse time zone offset -HH:MM', function(){
            var date = Date.UTC(2000, 9, 11, 8, 0, 0, 0);
            expect( parseIso('2000-10-11T04:00-04:00') ).toEqual(date);
        });

        it('should parse date and time YYYYMMDDTHHMM+ZZZZ', function(){
            var date = Date.UTC(2000, 9, 11, 8, 0, 0, 0);
            expect( parseIso('20001011T0400-0400') ).toEqual(date);
        });

        it('should parse time zone offset minutes', function(){
            var date = Date.UTC(2000, 9, 11, 8, 29, 0, 0);
            expect( parseIso('2000-10-11T12:00+03:31') ).toEqual(date);
        });

        it('should parse time zone offset -24:00', function(){
            var date = Date.UTC(2000, 9, 13, 0, 0, 0, 0);
            expect( parseIso('2000-10-11T24:00-24:00') ).toEqual(date);
        });

        it('should parse max date', function(){
            var date = Date.UTC(10000, 0, 2, 0, 0, 0, 0);
            expect( parseIso('9999-12-31T24:00-24:00') ).toEqual(date);
        });

        it('should parse zero date', function(){
            // Date.UTC converts all dates < 100 to be relative to 1900, so
            // hardcode the time stamp
            var date = -62167219200000;
            expect( parseIso('0000-01-01T00:00') ).toEqual(date);
        });

        it('should parse epoch date', function(){
            expect( parseIso('1970-01-01T00:00:00') ).toEqual(0);
            expect( parseIso('1970-001') ).toEqual(0);
            expect( parseIso('1970-01-01') ).toEqual(0);
            expect( parseIso('19700101T000000.00') ).toEqual(0);
            expect( parseIso('1970-01-01T02:00+02:00') ).toEqual(0);
        });

        it('should error on invalid year', function(){
            expect( parseIso('123') ).toBeNaN();
        });

        it('should error on invalid month', function(){
            expect( parseIso('2000-13') ).toBeNaN();
            expect( parseIso('2000-1') ).toBeNaN();
            expect( parseIso('2000-1.5') ).toBeNaN();
        });

        it('should error on invalid day', function(){
            expect( parseIso('2000-01-32') ).toBeNaN();
            expect( parseIso('2000-01-1') ).toBeNaN();
            expect( parseIso('2000-01-01.5') ).toBeNaN();
        });

        it('should error on invalid hour', function(){
            expect( parseIso('2000-01-01T25') ).toBeNaN();
            expect( parseIso('2000-01-01T24.1') ).toBeNaN();
            expect( parseIso('2000-01-01T2') ).toBeNaN();
        });

        it('should error on invalid minutes', function(){
            expect( parseIso('2000-01-01T12:60') ).toBeNaN();
            expect( parseIso('2000-01-01T24:01') ).toBeNaN();
            expect( parseIso('2000-01-01T24:00.1') ).toBeNaN();
            expect( parseIso('2000-01-01T12:0') ).toBeNaN();
        });

        it('should error on invalid seconds', function(){
            expect( parseIso('2000-01-01T12:00:60') ).toBeNaN();
            expect( parseIso('2000-01-01T12:00:0') ).toBeNaN();
            expect( parseIso('2000-01-01T12:00:0.0') ).toBeNaN();
        });

        it('should error on invalid time zone', function(){
            expect( parseIso('2000-01-01T12:00A') ).toBeNaN();
            expect( parseIso('2000-01-01T12:00-24:01') ).toBeNaN();
            expect( parseIso('2000-01-01T12:00+24:01') ).toBeNaN();
            expect( parseIso('2000-01-01T12:00+1:00') ).toBeNaN();
            expect( parseIso('2000-01-01T12:00+00:1') ).toBeNaN();
        });

        it('should error on invalid ordinal date', function(){
            expect( parseIso('2001-366') ).toBeNaN();
            expect( parseIso('2000-000') ).toBeNaN();
        });

    });

});
