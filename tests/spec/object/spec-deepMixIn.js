define(['src/object/deepMixIn'], function(deepMixIn) {
    describe('object/deepMixIn', function() {
        it('should mix properties into target', function() {
            var target = {
                foo: true
            };

            deepMixIn(target, { bar: true });

            expect(target).toEqual({
                foo: true,
                bar: true
            });
        });

        it('should mix in multiple objects', function() {
            var target = {};

            deepMixIn(target, { foo: true }, { bar: true });

            expect(target).toEqual({
                foo: true,
                bar: true
            });
        });

        it('should return target object', function() {
            var target = {};

            var result = deepMixIn(target, { foo: true });

            expect(result).toBe(target);
        });

        it('should mix in child objects', function() {
            var target = {
                foo: { bar: "a" }
            };

            deepMixIn(target, { foo: { bar: "b" } });

            expect(target.foo.bar).toEqual("b");
        });

        it('should keep original child objects', function() {
            var foo = { foo: true };
            var target = { foo: foo };

            deepMixIn(target, { foo: { bar: true } });

            expect(target.foo).toBe(foo);
            expect(target.foo.foo).toEqual(true);
            expect(target.foo.bar).toEqual(true);
        });

        it('should clone added child objects', function() {
            var foo = { foo: true };
            var target = {};

            deepMixIn(target, { foo: foo });

            expect(target.foo).toEqual(foo);
            expect(target.foo).not.toBe(foo);
        });

        it('should overwrite existing values in target', function() {
            var target = {
                foo: { a: true }
            };

            deepMixIn(target, { foo: null });

            expect(target.foo).toBeNull();
        });
    });
});