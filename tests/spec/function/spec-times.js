define(['mout/function/times'], function(times){

    describe('function/times', function(){

        it('should iterate a given amount of times passing the index', function(){
            var amount = 5;
            var count = 0;

            times(amount, function(i) {
                count += i;
            });

            expect( count ).toBe( 10 );
        });

        it('should cancel the iteration if returned false', function() {
            var amount = 5;
            var count = 0;

            times(amount, function(i) {
                count++;
                if (count === 2) return false;
            });

            expect( count ).toBe( 2 );
        });

        it('should execute callback in context', function() {
            var amount = 5;
            var object = {
                count: 0
            };

            times(amount, function(i) {
                this.count++;
            }, object);

            expect( object.count ).toBe( 5 );
        });

    });

});
