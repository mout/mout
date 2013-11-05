define(['mout/function/after', '../time/helper-mockNow'], function(after, mockNow){

    describe('function/after', function(){

        beforeEach(function() {
            jasmine.Clock.useMock();
            mockNow.start();
        });

        afterEach(function(){
            mockNow.end();
        });

        it('should wait for delay', function() {
            var count = 0;
            var fn = function() {
                count++;
            };
            var callback = after(fn, 100);

            callback();
            expect( count ).toBe(0);

            jasmine.Clock.tick(100);
            expect( count ).toBe(1);
        });

        it('should wait for callback and always be async', function() {
            var count = 0;
            var fn = function() {
                count++;
            };
            var callback = after(fn, 100);

            jasmine.Clock.tick(100);
            expect( count ).toBe(0);

            callback();
            // callback is always async
            expect( count ).toBe(0);

            jasmine.Clock.tick(5);
            expect( count ).toBe(1);
        });

        it('should not be called before delay even if called multiple times', function() {
            var count = 0;
            var fn = function() {
                count++;
            };
            var callback = after(fn, 30);

            callback();
            callback();
            jasmine.Clock.tick(29);
            expect( count ).toBe(0);
            jasmine.Clock.tick(1);
            expect( count ).toBe(2);
        });

        it('should carry arguments', function() {
            var count = 0;
            var fn = function(a) {
                count = a;
            };
            var callback = after(fn, 100);

            jasmine.Clock.tick(100);

            callback(5);
            // callback is always async
            jasmine.Clock.tick(5);
            expect( count ).toBe(5);
        });

        it('should carry arguments from premature call', function() {
            var count = 0;
            var fn = function(a) {
                count = a;
            };
            var callback = after(fn, 100);

            callback(2);
            expect( count ).toBe(0);

            jasmine.Clock.tick(100);
            expect( count ).toBe(2);
        });

    });

});
