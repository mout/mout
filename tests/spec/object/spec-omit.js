define(['mout/object/omit'], function (omit) {

    describe('object/omit()', function () {

        it('should remove all specified properties', function () {
            var obj = {
                foo : 1,
                bar : 2,
                lorem : 3
            };
            var result = omit(obj, 'foo', 'lorem');
            expect(result).toEqual({bar: 2});
        });

        it('should allow passing keys that should be removed as array', function () {
            var obj = {
                a : false, // test for falsy value
                b : 'bar',
                toString : 'dolor' // test don't enum bug on IE
            };
            var result = omit(obj, ['a', 'toString']);
            expect(result).toEqual({b: 'bar'});
        });

    });

});
