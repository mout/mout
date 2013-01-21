define(['mout/function/partial'], function(partial){

    var add = function(a, b){
        return a + b;
    };


    describe('function/partial', function(){

        it('should curry arguments', function(){
            var addTen = partial(add, 10);
            expect( addTen(2) ).toBe( 12 );
            expect( addTen(5) ).toBe( 15 );
        });

        it('should curry multiple arguments', function(){
            expect( partial(add, 10, 5)() ).toBe( 15 );
        });

    });

});
