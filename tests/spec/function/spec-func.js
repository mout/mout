define(['src/function/func'], function (func) {

    describe('function/func()', function () {

        it('should call method of object', function () {

            var o = {getFoo : function(){ return 'bar'; }};
            var getFoo = func('getFoo');

            expect( getFoo(o) ).toBe('bar');

        });

    });

});
