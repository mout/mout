define(['mout/array/pick'], function (pick) {

    describe('array/pick()', function () {

        it('should remove a random item from the array and return it', function () {
            var arr = [1, 2, 3, 4, 5, 6],
                copy = arr.concat();

            var a = pick(arr);

            expect( copy ).toContain( a );
            expect( arr ).not.toContain( a );
            expect( arr.length ).toBe( copy.length - 1 );
        });

        it('should return undefined if empty array', function () {
            var arr = [],
                copy = arr.concat();

            var a = pick(arr);

            expect( a ).toBeUndefined();
            expect( arr ).not.toContain( a );
            expect( arr.length ).toBe( 0 );
        });

        it('should return undefined if array is null/undefined', function () {
            expect( pick(null) ).toBeUndefined();
            expect( pick(undefined) ).toBeUndefined();
        });


        it('should return a new array with N random items and remove items from original array if user supply second argument', function(){
            var arr = [1, 2, 3, 4, 5, 6];
            var copy = arr.concat();

            var result = pick(arr, 3);

            expect(result.length).toEqual(3);
            expect(arr.length).toEqual(3);

            expect(copy).toContain(result[0]);
            expect(arr).not.toContain(result[0]);
            expect(copy).toContain(result[1]);
            expect(arr).not.toContain(result[1]);
            expect(copy).toContain(result[2]);
            expect(arr).not.toContain(result[2]);

            var result2 = pick(arr, 3);

            expect(result2.length).toEqual(3);
            expect(arr.length).toEqual(0);

            expect(copy).toContain(result2[0]);
            expect(result).not.toContain(result2[0]);
            expect(copy).toContain(result2[1]);
            expect(result).not.toContain(result2[1]);
            expect(copy).toContain(result2[2]);
            expect(result).not.toContain(result2[2]);
        });


        it('should return empty array if arr is null', function () {
            expect( pick(null, 2) ).toEqual( [] );
        });


        it('should return empty array if target array is empty', function () {
            expect( pick([], 2) ).toEqual( [] );
        });


        it('should limit the amount of items based on array.length', function () {
            var arr = [1];
            var result = pick(arr, 2);
            expect( result ).toEqual( [1] );
            expect( arr.length ).toEqual( 0 );
        });


        it('should return empty array if nItems is negative', function () {
            expect( pick([1], -1) ).toEqual( [] );
        });


        it('should return empty array if nItems is Zero', function () {
            expect( pick([1], 0) ).toEqual( [] );
        });


        it('should return a single item if nItems is null or undefined', function () {
            expect( pick([1], null) ).toEqual( 1 );
            expect( pick([1], undefined) ).toEqual( 1 );
        });


    });


});
