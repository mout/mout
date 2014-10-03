define(['mout/array/take'], function(take){


    describe('array/take', function(){

        it('should iterate a given amount of times passing the index and total', function(){
            var amount = 5;
            var count = 0;

            take(amount, function(i, total) {
                count += i;
                expect( total ).toBe(amount);
                return count;
            });

            expect( count ).toBe( 10 );
        });

        it('should collect the results of the callback', function() {
            var amount = 5;
            var count = 0;

            var vals = take(amount, function(i, total) {
                return i / total;
            });

            expect( vals.length ).toBe(amount);

            for( var i=0; i<amount; i++){
                expect( vals[i] ).toBe(i/amount);
            }

        });

        it('should execute callback in context', function() {
            var object = {
                phrase: 'hello world'
            };

            var vals = take(object.phrase.length, function(i) {
                return this.phrase[i];
            }, object);

            expect( vals.length ).toBe( object.phrase.length );

            for( var i=0; i<object.phrase.length; i++ ){
                expect( vals[i] ).toBe(object.phrase[i]);
            }
        });

    });

});
