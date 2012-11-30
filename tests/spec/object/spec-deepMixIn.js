define(['amd-utils/object/deepMixIn'], function(deepMixIn) {
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

        it('should override array keys in place (no clone)', function () {
            var arr1 = [1,2];
            var arr2 = [3];
            var arr3 = [4, 5, 6];

            var target = {a : arr1};
            var o1 = {c: 'bar'};
            var o2 = {a : arr2, b : true};

            deepMixIn(target, o1, o2);

            expect( target.a ).toEqual( [3,2] );
            expect( target.b ).toEqual( true );
            expect( target.c ).toEqual( 'bar' );

            // it should edit the original array without cloning
            expect( target.a ).toBe( arr1 );

            var o3 = {a : arr3};

            deepMixIn(target, o3);

            // it should edit the original array without cloning
            expect( target.a ).toBe( arr1 );
            expect( target.a ).not.toBe( arr3 );
            expect( target.a ).toEqual( arr3 );

            // should keep keep old properties
            expect( target.b ).toEqual( true );
            expect( target.c ).toEqual( 'bar' );
        });

    });
});
