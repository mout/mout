import isEmpty from '../../../lang/isEmpty';

describe('lang/isEmpty', function() {
    it('should work on strings', function() {
        expect(isEmpty('')).toEqual(true);
        expect(isEmpty('foo')).toEqual(false);
    });

    it('should work on arrays', function() {
        expect(isEmpty([])).toEqual(true);
        expect(isEmpty([1])).toEqual(false);
        expect(isEmpty([1, 2])).toEqual(false);
    });

    it('should work on objects', function() {
        expect(isEmpty({})).toEqual(true);
        expect(isEmpty({ a: 1 })).toEqual(false);
        expect(isEmpty({ a: 1, b: 2 })).toEqual(false);
    });

    it("should return true for any value that isn't a collection", function() {
        expect(isEmpty(null)).toEqual(true);
        expect(isEmpty(undefined)).toEqual(true);

        expect(isEmpty(0)).toEqual(true);
        expect(isEmpty(123)).toEqual(true);
        expect(isEmpty(-3)).toEqual(true);
        expect(isEmpty(NaN)).toEqual(true);
        expect(isEmpty(Infinity)).toEqual(true);
        expect(isEmpty(-Infinity)).toEqual(true);

        expect(isEmpty(false)).toEqual(true);
        expect(isEmpty(true)).toEqual(true);

        const fn = function() {};
        const fn2 = function() {};
        fn2.bar = 'ipsum';
        expect(isEmpty(fn)).toEqual(true);
        expect(isEmpty(fn2)).toEqual(true);
    });
});
