define(['mout/function/delay'], function (delay) {

    describe('function/delay()', function(){

        function doIt(){
            this.a++;
        }

        function manipulate(value) {
        	this.a = value;
        }

        beforeEach(function() {
            jasmine.Clock.useMock();
        });

        it('should delay execution', function(){
            var callback = jasmine.createSpy();
            delay(callback, 300);

            jasmine.Clock.tick(100);
            expect(callback).not.toHaveBeenCalled();

            jasmine.Clock.tick(250);
            expect(callback).toHaveBeenCalled();
        });

        it('should call closure with context', function(){
        	var context = { a: 0 };
            delay(doIt, 300, context);

            jasmine.Clock.tick(350);
            expect(context.a).toBe(1);
        });

        it('should curry arguments', function(){
    		var context = { a: 0 };
    		delay(manipulate, 300, context, [ 5 ]);

            jasmine.Clock.tick(350);
    		expect(context.a).toBe(5);
        });

        it('should override previous delay by default', function(){
            var callback = jasmine.createSpy();
            delay(callback, 200);

            jasmine.Clock.tick(100);
            delay(callback, 200);

            jasmine.Clock.tick(300);
            expect(callback.callCount).toBe(1);
        });

        it('should not override delay', function(){
            var callback = jasmine.createSpy();
            delay(callback, 300);

            jasmine.Clock.tick(100);
            delay(callback, 100, this, null, false);

            jasmine.Clock.tick(250);
            expect(callback.callCount).toBe(2);
        });

        it('should clear an delay', function() {

            var callback = jasmine.createSpy();
            var identifier = delay(callback, 300);

            jasmine.Clock.tick(100);
            delay.clear(identifier);

            jasmine.Clock.tick(250);
            expect(callback).not.toHaveBeenCalled();
        });
    });
});
