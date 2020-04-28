import clone from '../../../lang/clone';

describe('lang/clone', function() {
    it('should not return source object', function() {
        const src = {};
        const result = clone(src);
        expect(result).not.toBe(src);
    });

    it('should copy source properties', function() {
        const src = { test: true };
        const result = clone(src);
        expect(result.test).toBe(true);
    });

    it('should not clone child objects', function() {
        const src = { test: {} };
        const result = clone(src);
        expect(result.test).toBe(src.test);
    });

    it('should clone arrays', function() {
        const src = [1, 2, 3];
        const result = clone(src);
        expect(result).not.toBe(src);
        expect(result).toEqual(src);
    });

    it('should clone RegExps', function() {
        const src = /test/gim;
        const result = clone(src);
        expect(result).not.toBe(src);
        expect(result).toEqual(src);
        expect(result.ignoreCase).toEqual(true);
        expect(result.multiline).toEqual(true);
        expect(result.global).toEqual(true);
    });

    it('should clone Dates', function() {
        const src = new Date();
        const result = clone(src);
        expect(result).not.toBe(src);
        expect(result).toEqual(src);
    });

    it('should not clone objects created with custom constructor', function() {
        function TestType() {}
        const src = new TestType();
        const result = clone(src);
        expect(result).toBe(src);
    });
});
