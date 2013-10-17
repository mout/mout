define(['mout/function/throttle', '../time/helper-mockNow'], function(throttle, mockNow){

    describe('function/throttle', function(){


        beforeEach(function() {
            jasmine.Clock.useMock();
            mockNow.start();
        });

        afterEach(function(){
            mockNow.end();
        });

        it('should execute callback only once per interval', function(){
            var i = 0;
            var count = 0;
            var cb = throttle(function() {
                count++;
            }, 50);

            expect(count).toEqual(0);
            // ensure it was called once during interval
            while (++i <= 5) { cb(); }
            expect(count).toEqual(1);

            // ensure it was not called again before timeout
            jasmine.Clock.tick(49);
            expect(count).toEqual(1);

            // ensure it was called again after timeout
            jasmine.Clock.tick(1);
            expect(count).toEqual(2);

            // ensure it wasnt called more than once at tail
            jasmine.Clock.tick(51);
            expect(count).toEqual(2);

            // ensure it still works after "delay gaps"
            jasmine.Clock.tick(120);
            expect(count).toEqual(2);
            cb();
            expect(count).toEqual(3);
            jasmine.Clock.tick(1);
            i = 0;
            while (++i <= 5) { cb(); }
            expect(count).toEqual(3);

            // ensure it wasnt called during interval
            jasmine.Clock.tick(48);
            expect(count).toEqual(3);

            // ensure it is called at tail
            jasmine.Clock.tick(1);
            expect(count).toEqual(4);

            // only once at tail
            jasmine.Clock.tick(51);
            expect(count).toEqual(4);
        });


        it('should not call again at tail if called just once', function () {
            var count = 0;
            var cb = throttle(function() {
                count++;
            }, 50);

            cb();
            expect(count).toEqual(1);
            jasmine.Clock.tick(51);
            expect(count).toEqual(1);
        });


        it('should allow passing args and should use first supplied value by default', function () {
            var count = 0;
            var cb = throttle(function(x, y) {
                count += x + y;
            }, 50);

            cb(1, 2);
            cb(3, 4);
            cb(5, 6);

            expect(count).toEqual(3);
            jasmine.Clock.tick(51);
            expect(count).toEqual(14);
        });

        it('throttled fn should always return first returned value', function () {
            var cb = throttle(function(val){
                return val;
            }, 50);
            expect( cb('x') ).toEqual( 'x' );
            expect( cb('x') ).toEqual( cb('y') );
        });

        it('should allow to cancel the throttled call', function () {
            var count = 0;
            var cb = throttle(function() {
                count++;
            }, 50);
            cb();
            expect( count ).toEqual( 1 );
            jasmine.Clock.tick(20);
            cb();
            expect( count ).toEqual( 1 );
            cb.cancel();
            jasmine.Clock.tick(51);
            expect( count ).toEqual( 1 );
        });

    });

});
