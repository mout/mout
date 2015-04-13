define(['mout/object/flatten'], function (flatten) {

    describe('object/flatten()', function () {

        it('should recursively flatten the object', function () {
            var obj = { a: 1, b: 2, c: { d: 3, e: { f: 4 } } },
                result;

            result = flatten(obj);
            expect(result).toEqual({ a: 1, b: 2, 'c.d': 3, 'c.e.f': 4 });
        });

        it('should only flatten one layer if level is 1', function () {
            var obj = { a: 1, b: 2, c: { d: 3, e: { f: 4 } } },
                result;

            result = flatten(obj, 1);
            expect(result).toEqual({ a: 1, b: 2, 'c.d': 3, 'c.e': { f: 4 } });
        });

        it('should only flatten 2 layers if level is 2', function () {
            var obj = { a: 1, b: 2, c: { d: 3, e: { f: 4, g: { h: 5 } } } },
                result;

            result = flatten(obj, 2);
            expect(result).toEqual({ a: 1, b: 2, 'c.d': 3, 'c.e.f': 4, 'c.e.g': { h: 5 } });
        });

        it('should not mess with objects within arrays', function () {
            var obj = { a: 1, b: [{ e: { f: 4 } }] },
                result;

            result = flatten(obj);
            expect(result).toEqual({ a: 1, b: [{ e: { f: 4 } }] });
        });

        it('should return empty object when source object is null/undefined', function () {
            expect( flatten(null) ).toEqual( {} );
            expect( flatten(undefined) ).toEqual( {} );
        });
    });
});
