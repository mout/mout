define(['src/function/prop'], function (prop) {

    describe('function/prop()', function () {

        it('should grab property from object', function () {

            var o = {foo : 'bar'};
            var getFoo = prop('foo');

            expect( getFoo(o) ).toBe('bar');

        });

    });

});
