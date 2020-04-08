import debounce from '../../../src/function/debounce';
import mockNow from '../time/helper-mockNow';

    describe('function/debounce', function(){

        beforeEach(function() {
            jasmine.clock.install();
            mockNow.start();
        });

        afterEach(function(){
            jasmine.clock.uninstall();
            mockNow.end();
        });

        it('should execute callback only once after consecutive calls and just after interval', function(){
            var count = 0;
            var cb = debounce(function(){
                count++;
            }, 50);
            cb();
            cb();
            expect( count ).toBe( 0 );

            jasmine.clock.tick(50);
            expect( count ).toBe( 1 );
        });


        it('should allow passing args and should use last supplied value by default', function(){
            var count = 0;
            var cb = debounce(function(a, b){
                count += a + b;
            }, 50);
            cb(1,2);
            cb(3,4);
            expect( count ).toBe(0);

            jasmine.clock.tick(51);
            expect( count ).toBe(7);
        });


        it('should allow executing callback at begin', function(){
            var count = 0;
            var cb = debounce(function(){
                count++;
            }, 50, true);
            cb();
            cb();
            expect( count ).toBe(1);

            jasmine.clock.tick(51);
            expect( count ).toBe(1);
            cb();
            cb();
            expect( count ).toBe(2);
        });


        it('should use first supplied args if it executes asap', function(){
            var count = 0;
            var cb = debounce(function(a, b){
                count += a + b;
            }, 50, true);
            cb(1,2);
            cb(3,4);
            expect( count ).toBe(3);

            jasmine.clock.tick(51);
            expect( count ).toBe(3);
            cb(5, 6);
            cb(7, 8);
            expect( count ).toBe(14);
        });


        it('should allow to cancel the debounced call', function () {
            var count = 0;
            var cb = debounce(function(){
                count++;
            }, 50);
            cb();
            cb();
            expect( count ).toBe( 0 );

            jasmine.clock.tick(51);
            expect( count ).toBe( 1 );

            cb();
            cb();
            cb.cancel();
            jasmine.clock.tick(51);
            expect( count ).toBe( 1 );
        });


    });
