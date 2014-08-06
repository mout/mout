define(['mout/array/equals'], function(equals){

    describe('array/equals', function(){

        it('should check if array contains same elements', function(){
            expect( equals([1, 2], [1, 2]) ).toBe(true);
            expect( equals([2, 1], [1, 2]) ).toBe(false);
            expect( equals([1, 2, 3], [1, 2]) ).toBe(false);
            expect( equals([1, 3, 3], [1, 2, 4]) ).toBe(false);
        });

        it('should consider empty arrays as equal', function() {
            expect( equals([], []) ).toBe(true);
        });

        it('should allow custom compare functions', function() {
            var a = [1, 'bar', {}];
            var b = ['1', 'bar', {}];
            var compare = function(a, b) {
                return String(a) === String(b);
            };
            expect( equals(a, b, compare) ).toBe(true);
        });

    });

});
