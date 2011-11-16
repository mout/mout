define(['src/array/compact'], function (compact) {

    describe('array/compact()', function () {

        it('should remove null and undefined items', function () {

            var arr = [1, 2, null, false, '', 'foo', undefined];
            arr[10] = 'bar';

            expect( compact(arr).length ).toBe( 6 );
            expect( compact(arr) ).toEqual( [1, 2, false, '', 'foo', 'bar'] );
        });

    });

});
