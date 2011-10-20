define(['src/time'], function(timeUtils){

    describe('time', function(){

        describe('split()', function(){

            it('should handle miliseconds to seconds', function(){

                var time = timeUtils.split(999);

                expect(time.miliseconds).toBe(999);
                expect(time.seconds).toBe(0);
                expect(time.minutes).toBe(0);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(0);


                time = timeUtils.split(1000);

                expect(time.miliseconds).toBe(0);
                expect(time.seconds).toBe(1);
                expect(time.minutes).toBe(0);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(0);


                time = timeUtils.split(1001);

                expect(time.miliseconds).toBe(1);
                expect(time.seconds).toBe(1);
                expect(time.minutes).toBe(0);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(0);


            });

            it('should handle seconds to minutes', function(){

                var time = timeUtils.split(59999);

                expect(time.miliseconds).toBe(999);
                expect(time.seconds).toBe(59);
                expect(time.minutes).toBe(0);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(0);


                time = timeUtils.split(60000);

                expect(time.miliseconds).toBe(0);
                expect(time.seconds).toBe(0);
                expect(time.minutes).toBe(1);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(0);


                time = timeUtils.split(61000);

                expect(time.miliseconds).toBe(0);
                expect(time.seconds).toBe(1);
                expect(time.minutes).toBe(1);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(0);


            });

            it('should handle minutes to hours', function(){

                var time = timeUtils.split(3599999);

                expect(time.miliseconds).toBe(999);
                expect(time.seconds).toBe(59);
                expect(time.minutes).toBe(59);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(0);


                time = timeUtils.split(3600000);

                expect(time.miliseconds).toBe(0);
                expect(time.seconds).toBe(0);
                expect(time.minutes).toBe(0);
                expect(time.hours).toBe(1);
                expect(time.days).toBe(0);


                time = timeUtils.split(3660000);

                expect(time.miliseconds).toBe(0);
                expect(time.seconds).toBe(0);
                expect(time.minutes).toBe(1);
                expect(time.hours).toBe(1);
                expect(time.days).toBe(0);


            });

            it('should handle hours to days', function(){

                var time = timeUtils.split(86399999);

                expect(time.miliseconds).toBe(999);
                expect(time.seconds).toBe(59);
                expect(time.minutes).toBe(59);
                expect(time.hours).toBe(23);
                expect(time.days).toBe(0);


                time = timeUtils.split(86400000);

                expect(time.miliseconds).toBe(0);
                expect(time.seconds).toBe(0);
                expect(time.minutes).toBe(0);
                expect(time.hours).toBe(0);
                expect(time.days).toBe(1);


                time = timeUtils.split(90000000);

                expect(time.miliseconds).toBe(0);
                expect(time.seconds).toBe(0);
                expect(time.minutes).toBe(0);
                expect(time.hours).toBe(1);
                expect(time.days).toBe(1);

            });

        });

        describe('toTimeString()', function(){

            it('should convert to proper units', function(){
                expect( timeUtils.toTimeString(999) ).toBe('00:00:00');
                expect( timeUtils.toTimeString(1000) ).toBe('00:00:01');
                expect( timeUtils.toTimeString(11000) ).toBe('00:00:11');
                expect( timeUtils.toTimeString(71000) ).toBe('00:01:11');
                expect( timeUtils.toTimeString(3671000) ).toBe('01:01:11');
            });

            it('should work for large numbers', function(){
                expect( timeUtils.toTimeString(timeUtils.DAY) ).toBe('24:00:00');
                expect( timeUtils.toTimeString(timeUtils.WEEK) ).toBe('168:00:00');
            });

        });

    });

});
