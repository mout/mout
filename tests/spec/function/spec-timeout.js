define(['mout/function/timeout'], function(timeout){

    describe('function/timeout', function(){

    function doIt(){
            this.a++;
        }

        function manipulate(value) {
            this.a = value;
        }

    beforeEach(function() {
            jasmine.Clock.useMock();
        });

        it('should delay the execution', function(){
            var callback = jasmine.createSpy();
            timeout(callback, 300);

            jasmine.Clock.tick(100);
            expect(callback).not.toHaveBeenCalled();

            jasmine.Clock.tick(250);
            expect(callback).toHaveBeenCalled();
        });

        it('should call function in given context', function(){
            var context = { a: 0 };
            timeout(doIt, 300, context);

            jasmine.Clock.tick(350);
            expect(context.a).toBe(1);
        });

        it('should curry arguments', function(){
            var context = { a: 0 };
            timeout(manipulate, 300, context, 5 );

            jasmine.Clock.tick(350);
            expect(context.a).toBe(5);
        });

        it('should cancel a timemout', function(){
        var callback = jasmine.createSpy();
        var id = timeout(callback, 200);

        jasmine.Clock.tick(100);
        clearTimeout(id);

        jasmine.Clock.tick(200);
        expect(callback).not.toHaveBeenCalled();
        });

    });

});
