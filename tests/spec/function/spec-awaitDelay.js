import awaitDelay from '../../../src/function/awaitDelay';
import mockNow from '../time/helper-mockNow';

    describe('function/awaitDelay', function(){

        beforeEach(function() {
            jasmine.clock.install();
            mockNow.start();
        });

        afterEach(function(){
            jasmine.clock.uninstall();
            mockNow.end();
        });

        it('should wait for delay', function() {
            var count = 0;
            var fn = function() {
                count++;
            };
            var callback = awaitDelay(fn, 100);

            callback();
            expect( count ).toBe(0);

            jasmine.clock.tick(100);
            expect( count ).toBe(1);
        });

        it('should wait for callback and always be async', function() {
            var count = 0;
            var fn = function() {
                count++;
            };
            var callback = awaitDelay(fn, 100);

            jasmine.clock.tick(100);
            expect( count ).toBe(0);

            callback();
            // callback is always async
            expect( count ).toBe(0);

            jasmine.clock.tick(5);
            expect( count ).toBe(1);
        });

        it('should not be called before delay even if called multiple times', function() {
            var count = 0;
            var fn = function() {
                count++;
            };
            var callback = awaitDelay(fn, 30);

            callback();
            callback();
            jasmine.clock.tick(29);
            expect( count ).toBe(0);
            jasmine.clock.tick(1);
            expect( count ).toBe(2);
        });

        it('should carry arguments', function() {
            var count = 0;
            var fn = function(a) {
                count = a;
            };
            var callback = awaitDelay(fn, 100);

            jasmine.clock.tick(100);

            callback(5);
            // callback is always async
            jasmine.clock.tick(5);
            expect( count ).toBe(5);
        });

        it('should carry arguments from premature call', function() {
            var count = 0;
            var fn = function(a) {
                count = a;
            };
            var callback = awaitDelay(fn, 100);

            callback(2);
            expect( count ).toBe(0);

            jasmine.clock.tick(100);
            expect( count ).toBe(2);
        });

        it('should allow changing the context', function () {
            var val;
            var ctx;
            var foo = {bar:'baz'};

            var fn = function(a) {
                val = a;
                ctx = this;
            };
            var callback = awaitDelay(fn, 100);

            callback.call(foo, 2);
            expect( val ).toBeUndefined();
            expect( ctx ).toBeUndefined();

            jasmine.clock.tick(100);
            expect( val ).toBe(2);
            expect( ctx ).toBe(foo);
        });

        it('should allow using `clearTimeout` to cancel the delayed call', function () {
            var count = 0;
            var fn = function() {
                count++;
            };
            var callback = awaitDelay(fn, 100);

            var timeout = callback();
            expect( count ).toBe(0);
            jasmine.clock.tick(50);
            clearTimeout(timeout);

            // ensure clearTimeout avoided call
            jasmine.clock.tick(50);
            expect( count ).toBe(0);

            // ensure that second call is still triggered
            timeout = callback();
            jasmine.clock.tick(100);
            expect( count ).toBe(1);
        });

    });
