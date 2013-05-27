define(['mout/array/pickMany'], function(pickMany){

    describe('array/pickMany', function(){

        it('should return a new array with N random items and remove items from original array', function(){
            var arr = [1, 2, 3, 4, 5, 6];
            var copy = arr.concat();

            var result = pickMany(arr, 3);

            expect(result.length).toEqual(3);
            expect(arr.length).toEqual(3);

            expect(copy).toContain(result[0]);
            expect(arr).not.toContain(result[0]);
            expect(copy).toContain(result[1]);
            expect(arr).not.toContain(result[1]);
            expect(copy).toContain(result[2]);
            expect(arr).not.toContain(result[2]);

            var result2 = pickMany(arr, 3);

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
            expect( pickMany(null, 2) ).toEqual( [] );
        });


        it('should return empty array if target array is empty', function () {
            expect( pickMany([], 2) ).toEqual( [] );
        });


        it('should limit the amount of items based on array.length', function () {
            var arr = [1];
            var result = pickMany(arr, 2);
            expect( result ).toEqual( [1] );
            expect( arr.length ).toEqual( 0 );
        });


        it('should return empty array if nItems is negative', function () {
            expect( pickMany([1], -1) ).toEqual( [] );
        });


        it('should return empty array if nItems is Zero', function () {
            expect( pickMany([1], 0) ).toEqual( [] );
        });


        it('should return empty array if nItems is null', function () {
            expect( pickMany([1], null) ).toEqual( [] );
        });


        it('should return empty array if nItems is undefined', function () {
            expect( pickMany([1]) ).toEqual( [] );
        });

    });

});
