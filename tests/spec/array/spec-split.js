define(["src/array/split"], function(split) {

    describe('array/split()', function() {

        it('should split array into segments', function() {
            var arr = [1, 2, 3, 4, 5, 6];
            expect( split(arr, 3) ).toEqual([ [1, 2], [3, 4], [5, 6] ]);
        });

        it('should default to 2 segments', function() {
            var arr = [1, 2, 3, 4, 5, 6];
            expect( split(arr) ).toEqual([ [1, 2, 3], [4, 5, 6] ]);
        });

        it('should put remaining items on first segments if not even split', function() {
            var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            expect( split(arr, 3) ).toEqual(
                [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h'] ]);
        });

        it('should return empty array when input is empty', function() {
            expect( split([]) ).toEqual([]);
        });

        it('should not return empty segments', function() {
            var arr = [1, 2];
            expect( split(arr, 3) ).toEqual([ [1], [2] ]);
        });
    });

});
