import deepMixIn from '../../../object/deepMixIn';
describe('object/deepMixIn', function() {
    it('should mix properties into target', function() {
        const target = {
            foo: true
        };

        deepMixIn(target, { bar: true });

        expect(target).toEqual({
            foo: true,
            bar: true
        });
    });

    it('should mix in multiple objects', function() {
        const target = {};

        deepMixIn(target, { foo: true }, { bar: true });

        expect(target).toEqual({
            foo: true,
            bar: true
        });
    });

    it('should return target object', function() {
        const target = {};

        const result = deepMixIn(target, { foo: true });

        expect(result).toBe(target);
    });

    it('should mix in child objects', function() {
        const target = {
            foo: { bar: 'a' }
        };

        deepMixIn(target, { foo: { bar: 'b' } });

        expect(target.foo.bar).toEqual('b');
    });

    it('should keep original child objects', function() {
        const foo = { foo: true };
        const target = { foo: foo };

        deepMixIn(target, { foo: { bar: true } });

        expect(target.foo).toBe(foo);
        expect(target.foo.foo).toEqual(true);
        expect(target.foo.bar).toEqual(true);
    });

    it('should keep added child objects', function() {
        const foo = { foo: true };
        const target = {};

        deepMixIn(target, { foo: foo });

        expect(target.foo).toBe(foo);
    });

    it('should overwrite existing values in target if value is not an object', function() {
        const target = {
            foo: { a: true },
            bar: [1, 2, 3]
        };

        // important to test against null
        deepMixIn(target, { foo: null, bar: 1 });

        expect(target.foo).toBeNull();
        expect(target.bar).toBe(1);
    });

    it('should copy values that are not plain objects by reference', function() {
        function Custom() {}
        const source = {
            custom: new Custom(),
            items: [1, 2, 3],
            regexp: /test/
        };

        const target = {
            items: [5]
        };

        deepMixIn(target, source);
        expect(target.custom).toBe(source.custom);
        expect(target.items).toBe(source.items);
        expect(target.regexp).toBe(source.regexp);
    });
});
