define(['mout/array/findLastIndex'], function(findLastIndex){

    describe('array/findLastIndex', function(){

        it('should return index of first match starting from end of array', function(){
            var items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];

            var findOne = function(val) { return val === 1; },
                isString = function(val) { return typeof val === 'string'; },
                findObj = function(val) { return val.a === 1; };

            expect( findLastIndex(items, findOne) ).toEqual(2);
            expect( findLastIndex(items, isString) ).toEqual(4);
            expect( findLastIndex(items, findObj) ).toEqual(5);
        });

        it('should support object shortcut syntax', function(){
            var items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];

            expect( findLastIndex(items, { a: 1 }) ).toEqual(5);
        });

        it('should support string shortcut syntax', function(){
            var items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];

            expect( findLastIndex(items, 'a') ).toEqual(5);
        });

        it('should return -1 when not found', function(){
            var items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];
            var findTwo = function(val) { return val === 2; };

            expect( findLastIndex(items, findTwo) ).toEqual(-1);
        });

        it('should return -1 when array is null/undefined', function(){
            var testFunc = function() { return true; };

            expect( findLastIndex(null, testFunc) ).toBe( -1 );
            expect( findLastIndex(undefined, testFunc) ).toBe( -1 );
        });

        it('should pass array index and context', function() {
            var items = [1, 2, 3];
            var context = {};
            var testFunc = function(val, i, arr) {
                expect( this ).toBe( context );
                expect( arr ).toBe( items );
                expect( val ).toBe( arr[i] );
                expect( i ).toBeGreaterThan( -1 );
                expect( i ).toBeLessThan( items.length );
                return false;
            };

            expect( findLastIndex(items, testFunc, context) ).toBe( -1 );
        });

    });

});
