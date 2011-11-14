define(['src/array/join'], function (join) {

    describe('array/join()', function () {

        it('should join array items but ignoring empty/null items', function () {
            var arr = ['lorem', 'ipsum', null, 'dolor'];
            arr[8] = 'sit';
            arr[10] = 'amet';

            expect( join(arr, ' ') ).toBe( 'lorem ipsum dolor sit amet' );
        });

        it('should add "," as default separator', function () {
            var arr = ['lorem', 'ipsum', null, 'dolor'];
            arr[8] = 'sit';
            arr[10] = 'amet';

            expect( join(arr) ).toBe( 'lorem,ipsum,dolor,sit,amet' );
        });

        it('should allow empty string separator', function () {
            var arr = ['lorem', 'ipsum', null, 'dolor'];
            arr[8] = 'sit';
            arr[10] = 'amet';

            expect( join(arr, '') ).toBe( 'loremipsumdolorsitamet' );
        });

        it('should return an empty string if empty array', function () {
            var arr1 = [];
            var arr2 = [null, null];
            arr2[5] = null;

            expect( join(arr1) ).toBe( '' );
            expect( join(arr2) ).toBe( '' );
        });

    });

});
