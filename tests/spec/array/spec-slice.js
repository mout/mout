define(['mout/array/slice'], function(slice){

    describe('array/slice', function(){

        it('should return slice of array', function(){
            var arr = [1, 2, 3, 4, 5];
            expect( slice(arr, 1, 3) ).toEqual( [2, 3] );
        });

        it('should use end of array when end omitted', function(){
            var arr = [1, 2, 3, 4];
            expect( slice(arr, 1) ).toEqual( [2, 3, 4] );
        });

        it('should include whole array when start and end are omitted', function(){
            var arr = [1, 2, 3, 4],
                result = slice(arr);
            expect( result ).toEqual( arr );
            expect( result ).not.toBe( arr );
        });

        it('should accept negative start and end', function() {
            var arr = [1, 2, 3, 4];
            expect( slice(arr, 0, -2) ).toEqual( [1, 2] );
            expect( slice(arr, -2, 4) ).toEqual( [3, 4] );
            expect( slice(arr, -2, -1) ).toEqual( [3] );
        });

        it('should clamp negative start/end beyond array length', function() {
            var arr = [1, 2, 3];
            expect( slice(arr, -5, 2) ).toEqual( [1, 2] );
            expect( slice(arr, 0, -5) ).toEqual( [] );
        });

        it('should return empty array if start/end is higher than array length', function() {
            var arr = [1, 2, 3];
            expect( slice(arr, 5) ).toEqual( [] );
            expect( slice(arr, 5, 15) ).toEqual( [] );
        });

        it('should return whole array if end is higher than length', function() {
            var arr = [1, 2, 3];
            expect( slice(arr, 0, 8) ).toEqual( [1, 2, 3] );
        });

        it('should NOT skip sparse array indexes', function() {
            var arr = [1];
            arr[4] = 4;
            expect( slice(arr, 3, 5) ).toEqual( [undefined, 4] );
        });

        it('should convert array-like object to array', function(){
            var obj = { 'length': 3, 0: 'a', 1: 'b', 2: 'c' },
                result = slice(obj);
            expect( result ).toEqual( ['a', 'b', 'c'] );
            expect( result.constructor ).toBe( Array );
        });

        it('should convert NodeList objects', function() {
            if (typeof document === 'undefined') {
                expect(true).toBeTruthy('not in browser');
                return;
            }

            // Native Array.prototype.slice errors in IE 8 on NodeList
            var el = document.createElement('div'),
                child = document.createElement('div');
            el.appendChild(child);

            var list = el.childNodes;
            expect(slice(list)).toEqual([child]);
        });

    });

});
