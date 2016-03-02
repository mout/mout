define(['mout/function/after'], function(after){

    describe('function/after', function(){

        var count = 0;

        function tick() {
            count++;
        }

        beforeEach(function() {
            count = 0;
        });

        it('should the callback after appropriate calls', function(){

            var callback = after(tick, 3);

            callback();
            callback();
            callback();

            expect( count ).toBe( 1 );
        });

        it('should not call closure before', function(){

            var callback = after(tick, 5);

            callback();
            callback();
            callback();
            callback();

            expect( count ).toBe( 0 );
        });

        it('should continue calling the callback after the minimum amount of calls', function(){

            var callback = after(tick, 3);

            callback();
            callback();
            callback();
            callback();
            callback();

            expect( count ).toBe( 3 );
        });

    });

});
