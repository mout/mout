define(['mout/array/reject'], function(reject) {

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

        it('should return empty array if source array is null/undefined', function() {
            var testFunc = function() { return true; };

            expect( reject(null, testFunc) ).toEqual( [] );
            expect( reject(undefined, testFunc) ).toEqual( [] );
        });

        it('should allow object shorthand syntax', function () {
            var arr = [{a:1,b:2}, {a:2,b:3}, {a:1}, {a:1,b:2,c:3}];
            expect( reject(arr, {a:1}) ).toEqual( [arr[1]] );
        });


        it('should allow string shorthand syntax', function () {
            var arr = [{a:1,b:2}, {a:2,b:3}, {a:1}, {a:1,b:2,c:3}];
            expect( reject(arr, 'c') ).toEqual( arr.slice(0,3) );
        });


    });

});
