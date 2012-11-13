define(['src/collection/reject', 'src/collection/size'], function(reject, size){

    describe('collection/reject', function(){

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

        it('should iterate over sparse arrays. see #64', function() {
            var items = new Array(6);
            items[2] = 13;
            items[5] = 6;
            var count = 0;

            var result = reject(items, function(val, i, arr) {
                count += 1;
                return val == null || (val % 2 === 0);
            });

            expect(result).toEqual([13]);
            expect(count).toEqual(6);
        });

        it('should return empty array if all items rejected', function() {
            var items = [1, 2, 3, 4, 5];
            var result = reject(items, function() { return true; });
            expect(result).toEqual([]);
        });

        it('should reject items from object', function() {
            var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
            var thisObj = {};

            var result = reject(obj, function(val, key, list) {
                expect(val).toBe(obj[key]);
                expect(list).toBe(obj);
                expect(this).toBe(thisObj);
                return (val % 2) !== 0;
            }, thisObj);

            expect(size(obj)).toEqual(5);
            expect(result).toEqual([2, 4]);
        });

        it('should return empty array if all items rejected from object', function() {
            var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
            var result = reject(obj, function() { return true; });
            expect(result).toEqual([]);
        });

    });

});
