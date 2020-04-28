import makeIterator_ from '../../../function/makeIterator_';

describe('function/makeIterator_', function() {
    it('should return source argument if it is already a function with no context', function() {
        const fn = function() {};
        expect(makeIterator_(fn)).toBe(fn);
    });

    it('should return a function that calls object/deepMatches if argument is an object', function() {
        const fn = makeIterator_({ a: 1, b: { c: 2 } });
        expect(fn({ a: 1, b: { c: 2, d: 3 } })).toBe(true);
        expect(fn({ a: 1, b: { c: 3 } })).toBe(false);
    });

    it('should return a function that returns the property value if argument is a string', function() {
        const fn = makeIterator_('a');
        expect(fn({ a: 1, b: 2 })).toBe(1);
        expect(fn({ a: 2, b: 2 })).toBe(2);
    });

    it('should return a function that returns the property value if argument is a number', function() {
        const fn = makeIterator_(1);
        expect(fn([0, 4, 5])).toBe(4);
        expect(fn([6, 7, 8])).toBe(7);
    });

    it('should return an identify function if no args', function() {
        const fn = makeIterator_();
        expect(fn(null)).toBe(null);
        expect(fn(void 0)).toBe(void 0);
        expect(fn(3)).toBe(3);
    });

    it('should return an identify function if first arg is `null`', function() {
        const fn = makeIterator_(null);
        expect(fn(null)).toBe(null);
        expect(fn(void 0)).toBe(void 0);
        expect(fn(3)).toBe(3);
    });

    it('should return a function that is called with the specified context', function() {
        const context = {};
        const iterator = makeIterator_(function() {
            return this;
        }, context);
        expect(iterator()).toBe(context);
    });
});
