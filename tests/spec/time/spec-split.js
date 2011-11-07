define(['src/time/split'], function (split) {

    describe('time/split()', function(){

        it('should handle milliseconds to seconds', function(){

            var time = split(999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = split(1000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(1);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = split(1001);

            expect(time.milliseconds).toBe(1);
            expect(time.seconds).toBe(1);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


        });

        it('should handle seconds to minutes', function(){

            var time = split(59999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(59);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = split(60000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(1);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = split(61000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(1);
            expect(time.minutes).toBe(1);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


        });

        it('should handle minutes to hours', function(){

            var time = split(3599999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(59);
            expect(time.minutes).toBe(59);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(0);


            time = split(3600000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(1);
            expect(time.days).toBe(0);


            time = split(3660000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(1);
            expect(time.hours).toBe(1);
            expect(time.days).toBe(0);


        });

        it('should handle hours to days', function(){

            var time = split(86399999);

            expect(time.milliseconds).toBe(999);
            expect(time.seconds).toBe(59);
            expect(time.minutes).toBe(59);
            expect(time.hours).toBe(23);
            expect(time.days).toBe(0);


            time = split(86400000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(0);
            expect(time.days).toBe(1);


            time = split(90000000);

            expect(time.milliseconds).toBe(0);
            expect(time.seconds).toBe(0);
            expect(time.minutes).toBe(0);
            expect(time.hours).toBe(1);
            expect(time.days).toBe(1);

        });

    });

});
