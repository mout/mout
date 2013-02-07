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

            while (++i <= 5) { cb(); }
            expect(count).toEqual(1);

            jasmine.Clock.tick(51);

            i = 0;
            while (++i <= 5) { cb(); }
            expect(count).toEqual(2);
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


    });

});
