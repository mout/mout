define(['src/time/parseMs'], function (parseMs) {

    describe('time/parseMs()', function(){

        it('should handle milliseconds to seconds', function(){

            var time = parseMs(999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = parseMs(1000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(1);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = parseMs(1001);

            expect(time.milliseconds).toBe(1);
            expect(time.seconds).toBe(1);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


        });

        it('should handle seconds to minutes', function(){

            var time = parseMs(59999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(59);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = parseMs(60000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(1);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = parseMs(61000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(1);
            expect(time.minutes).toBe(1);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


        });

        it('should handle minutes to hours', function(){

            var time = parseMs(3599999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(59);
            expect(time.minutes).toBe(59);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = parseMs(3600000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(1);
            expect(time.days).toBe(0);


            time = parseMs(3660000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(1);
            expect(time.hours).toBe(1);
            expect(time.days).toBe(0);


        });

        it('should handle hours to days', function(){

            var time = parseMs(86399999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(59);
            expect(time.minutes).toBe(59);
            expect(time.hours).toBe(23);
            expect(time.days).toBe(0);


            time = parseMs(86400000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(1);


            time = parseMs(90000000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(1);
            expect(time.days).toBe(1);

        });

    });

});
