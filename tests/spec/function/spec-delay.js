define(['mout/function/delay'], function (delay) {

    describe('function/delay()', function(){

        function doIt(){
            this.a++;
        }

        function manipulate(value) {
        	this.a = value;
        }

        it('should delay execution', function(){
            runs(function(){
                this.callback = jasmine.createSpy();

                delay(this.callback, 300);
            });

            waits(100);

            runs(function(){
                expect(this.callback).not.toHaveBeenCalled();
            });

            waits(250);

            runs(function(){
                expect(this.callback).toHaveBeenCalled();
            });
        });

        it('should call closure with context', function(){
        	runs(function(){
        		this.context = { a: 0 };

                delay(doIt, 300, this.context);
            });

            waits(350);

            runs(function(){
                expect(this.context.a).toBe(1);
            });
        });

        it('should curry arguments', function(){
        	runs(function(){
        		this.context = { a: 0 };

        		delay(manipulate, 300, this.context, 5);
        	});

        	waits(350);

        	runs(function(){
        		expect(this.context.a).toBe(5);
        	});
        })

    });
});
