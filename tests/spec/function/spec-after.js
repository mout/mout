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
            }
            var callback = after(fn, 100);

            callback();
            expect( count ).toBe(0);

            jasmine.Clock.tick(101);
            expect( count ).toBe(1);
        });

        it('should wait for callback', function() {
            var count = 0;
            var fn = function() {
                count++;
            }
            var callback = after(fn, 100);

            jasmine.Clock.tick(200)
            expect( count ).toBe(0);

            callback();
            expect( count ).toBe(1);
        });

        it('should execute in context', function() {
            var context = { count: 0 };
            var fn = function() {
                this.count++;
            }
            var callback = after(fn, 100, context);

            callback();
            jasmine.Clock.tick(200);

            expect( context.count ).toBe(1);
        });

    });

});
