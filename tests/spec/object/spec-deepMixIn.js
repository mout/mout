define(['mout/object/deepMixIn'], function(deepMixIn) {
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

        it('should keep added child objects', function() {
            var foo = { foo: true };
            var target = {};

            deepMixIn(target, { foo: foo });

            expect(target.foo).toBe(foo);
        });

        it('should overwrite existing values in target if value is not an object', function() {
            var target = {
                foo: { a: true },
                bar : [1,2,3]
            };

            // important to test against null
            deepMixIn(target, { foo: null, bar: 1 });

            expect(target.foo).toBeNull();
            expect(target.bar).toBe( 1 );
        });

        it('should copy values that are not plain objects by reference', function() {
            function Custom() { }
            var source = {
                custom: new Custom(),
                items: [1, 2, 3],
                regexp: /test/
            };

            var target = {
                items: [5]
            };

            deepMixIn(target, source);
            expect(target.custom).toBe(source.custom);
            expect(target.items).toBe(source.items);
            expect(target.regexp).toBe(source.regexp);
        });

    });
});
