define(['mout/function/throttle'], function(throttle){

    describe('function/throttle', function(){

        beforeEach(function() {
            jasmine.Clock.useMock();
        });

        it('should execute callback only once per interval', function(){
            var i = 0;
            var count = 0;
            var cb = throttle(function() {
                count++;
            }, 50);

            expect(count).toEqual(0);
            while (++i <= 5) { cb(); }
            expect(count).toEqual(1);

            jasmine.Clock.tick(51);
            // ensure it was called again after timeout
            expect(count).toEqual(2);

            i = 0;
            while (++i <= 5) { cb(); }
            // ensure it wasn't called until timeout
            expect(count).toEqual(2);

            // ensure it is executed once at "tail" of callbacks
            jasmine.Clock.tick(150);
            expect(count).toEqual(3);
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
