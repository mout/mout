define(['mout/collection/reject', 'mout/collection/size'], function(reject, size){

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


        it('should support shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:1},
                '1' : {foo:'bar', lorem:'ipsum', id:2},
                '2' : {foo:'bar', lorem:'ipsum', id:4}
            };
            var arr = [obj[0], obj[1], obj[2]];

            expect( reject(obj, {foo:'bar', lorem:'ipsum'}) ).toEqual( [] );
            expect( reject(obj, {lorem:'ipsum', id:1}) ).toEqual( [obj[1], obj[2]] );
            expect( reject(obj, {amet:123}) ).toEqual( arr );

            expect( reject(arr, {foo:'bar', lorem:'ipsum'}) ).toEqual( [] );
            expect( reject(arr, {lorem:'ipsum', id:1}) ).toEqual( [obj[1], obj[2]] );
            expect( reject(arr, {amet:123}) ).toEqual( arr );
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:1},
                '1' : {foo:'bar', lorem:'ipsum', id:2},
                '2' : {foo:'bar', lorem:'ipsum', id:0}
            };
            var arr = [obj[0], obj[1], obj[2]];

            expect( reject(obj, 'foo') ).toEqual( [] );
            expect( reject(obj, 'id') ).toEqual( [obj[2]] );
            expect( reject(obj, 'amet') ).toEqual( [obj[0], obj[1], obj[2]] );

            expect( reject(arr, 'foo') ).toEqual( [] );
            expect( reject(arr, 'id') ).toEqual( [obj[2]] );
            expect( reject(arr, 'amet') ).toEqual( [obj[0], obj[1], obj[2]] );
        });


    });

});
