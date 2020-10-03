import some from '../../../object/some';

describe('object/some', function() {
    const isEven = function(val, key, obj) {
        return val % 2 === 0;
    };

    it('should work on normal object', function() {
        const a1 = { a: 1, b: 2, c: 3 };
        const a2 = { a: 1, b: 3, c: 5 };
        const a3 = { a: 2, b: 4, c: 6 };

        expect(some(a1, isEven)).toBe(true);
        expect(some(a2, isEven)).toBe(false);
        expect(some(a3, isEven)).toBe(true);
    });

    it('should work on empty objects', function() {
        expect(some({}, isEven)).toBe(false);
    });

    it("should avoid don't enum bug on IE 7-8", function() {
        const a1 = { a: 1, toString: 2 };
        const a2 = { a: 1, toString: 3 };
        expect(some(a1, isEven)).toBe(true);
        expect(some(a2, isEven)).toBe(false);
    });

    it('should support shorthand syntax', function() {
        const obj = {
            a: { foo: 'bar', lorem: 'ipsum', id: 1 },
            b: { foo: 'bar', lorem: 'ipsum', id: 2 },
            c: { foo: 'bar', lorem: 'ipsum', id: 4 }
        };
        expect(some(obj, { foo: 'bar', lorem: 'ipsum' })).toEqual(true);
        expect(some(obj, { lorem: 'ipsum', id: 1 })).toEqual(true);
        expect(some(obj, { id: 123 })).toEqual(false);
        expect(some(obj, { amet: 123 })).toEqual(false);
    });

    it('should allow string shorthand syntax', function() {
        const obj = {
            a: { foo: 'bar', lorem: 'ipsum', id: 1, disabled: false },
            b: { foo: 'bar', lorem: 'ipsum', id: 2, disabled: false },
            c: { foo: 'bar', lorem: 'ipsum', id: 0, disabled: false }
        };
        expect(some(obj, 'foo')).toEqual(true);
        expect(some(obj, 'id')).toEqual(true);
        expect(some(obj, 'amet')).toEqual(false);
        expect(some(obj, 'disabled')).toEqual(false);
    });
});
