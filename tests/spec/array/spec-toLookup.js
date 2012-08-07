define(['src/array/toLookup'], function (toLookup) {

    describe('array/toLookup()', function () {

        it('should create an object with the key specified as a string', function () {
            var arr = [{ name: 'a', thing: 1 }, { name: 'b', thing: 2 }];

            result = toLookup(arr, 'name');
            expect(result).toEqual({
                a: { name: 'a', thing: 1 },
                b: { name: 'b', thing: 2 }
            });
        });

        it('should create an object with the key specified as a function', function () {
            var arr = [{ name: 'a', thing: 1 }, null],
                result;

            result = toLookup(arr, function (v) {
                if (v === null) {
                    return 'null';
                } else {
                    return v.name;
                }
            });
            expect(result).toEqual({
                'null': null,
                a: { name: 'a', thing: 1 }
            });
        });

    });

});
