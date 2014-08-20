define(['mout/function/partial'], function(partial){

    var _ = partial._;

    var add = function(a, b){
        return a + b;
    };

    var append = function(a, b, c) {
        return a + b + c;
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

        it('should partially apply an argument with placeholder', function() {
            expect( partial(append, _, 'b', 'c')('a') ).toBe( 'abc' );
        });

        it('should partially apply multiple arguments with placeholder', function() {
            expect( partial(append, _, _, 'c')('a', 'b') ).toBe( 'abc' );
        });

        it('should partially apply multiple arguments with placeholder interleaved', function() {
            expect( partial(append, _, 'b', _)('a', 'c') ).toBe( 'abc' );
        });

    });

});
