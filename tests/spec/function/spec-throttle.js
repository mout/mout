define(['src/function/throttle'], function(throttle){

    describe('function/throttle', function(){

        // IMPORTANT: setTimeout behavior can be very misleading (specially in
        // FF18 and IE 7-8) so we avoid using it on the tests.

        it('should execute callback only once per interval', function(){
            var count = 0;
            var start = new Date();
            var cb = throttle(function(){
                count++;
            }, 30);
            var limit = 80;
            while((new Date() - start) < limit) {
                cb();
            }
            expect( count ).toBe( 3 );
        });


        it('should allow passing args and should use first supplied value by default', function () {
            var count = 0;
            var cb = throttle(function(a, b){
                count += a + b;
            }, 30);
            var start = new Date();
            var limit = 80;
            cb(1,2);
            cb(3,4);
            expect( count ).toBe( 3 );
            while ((new Date() - start) < limit) {
                cb(1,1);
            }
            expect( count ).toBe( 7 );
        });

        it('should return first value', function () {
            var cb = throttle(function(val){
                return val;
            }, 50);
            expect( cb('x') ).toEqual( 'x' );
            expect( cb('x') ).toEqual( cb('y') );
        });


    });

});
