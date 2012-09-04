define(['src/array/reject'], function(reject) {

    describe('array/reject()', function() {

        it('should reject items', function() {
            var items = [1, 2, 3, 4, 5],
                thisObj = {};
            var result = reject(items, function(val, i, arr) {
                expect(val).toBe(items[i]);
                expect(arr).toBe(items);
                expect(this).toBe(thisObj);
                return (val % 2) !== 0;
            }, thisObj);

            expect(items.length).toEqual(5);
            expect(result).toEqual([2, 4]);
        });

        it('should support sparse arrays', function() {
            var items = new Array(6);
            items[2] = 13;
            items[5] = 6;

            var result = reject(items, function(val, i, arr) {
                expect(i).not.toBe(4); // Make sure it skips the sparse items
                return val % 2 === 0;
            });

            expect(result).toEqual([13]);
        });

        it('should return empty array if all items rejected', function() {
            var items = [1, 2, 3, 4, 5];
            var result = reject(items, function() { return true; });
            expect(result).toEqual([]);
        });

    });

});
