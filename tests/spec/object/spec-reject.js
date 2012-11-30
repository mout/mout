define(['amd-utils/object/reject', 'amd-utils/object/size'], function(reject, size) {

    describe('object/reject', function(){

        it('should reject items', function() {
            var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
            var thisObj = {};

            var result = reject(obj, function(val, key, list) {
                expect(val).toBe(obj[key]);
                expect(list).toBe(obj);
                expect(this).toBe(thisObj);
                return (val % 2) !== 0;
            }, thisObj);

            expect(size(obj)).toEqual(5);
            expect(result).toEqual({b: 2, d: 4});
        });

        it('should return empty object if all items rejected', function() {
            var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
            var result = reject(obj, function() { return true; });
            expect(result).toEqual({});
        });

    });

});
