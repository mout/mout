define(['amd-utils/function/debounce'], function(debounce){

    describe('function/debounce', function(){

        // IMPORTANT: setTimeout behavior can be very misleading (specially in
        // FF18 and IE 7-8) so we avoid using it as much as possible on the
        // tests.

        it('should execute callback only once after consecutive calls and just after interval', function(done){
            var count = 0;
            var cb = debounce(function(){
                count++;
            }, 50);
            cb();
            cb();
            expect( count ).toBe( 0 );

            setTimeout(function(){
                expect( count ).toBe( 1 );
                done();
            }, 120);
        });


        it('should allow passing args and should use last supplied value by default', function (done) {
            var count = 0;
            var cb = debounce(function(a, b){
                count += a + b;
            }, 50);
            cb(1,2);
            cb(3,4);
            setTimeout(function(){
                expect( count ).toBe( 7 );
                done();
            }, 120);
            expect( count ).toBe( 0 );
        });


        it('should allow executing callback at begin', function(done){
            var count = 0;
            var cb = debounce(function(){
                count++;
            }, 30, true);
            cb();
            cb();
            setTimeout(function(){
                expect( count ).toBe( 1 );
                cb();
                cb();
                expect( count ).toBe( 2 );
                done();
            }, 120);
            expect( count ).toBe( 1 );
        });


        it('should use first supplied args if it executes asap', function (done) {
            var count = 0;
            var cb = debounce(function(a, b){
                count += a + b;
            }, 30, true);
            cb(1,2);
            cb(3,4);
            setTimeout(function(){
                expect( count ).toBe( 3 );
                cb(5,6);
                cb(7,8);
                expect( count ).toBe( 14 );
                done();
            }, 100);
            expect( count ).toBe( 3 );
        });


    });

});
