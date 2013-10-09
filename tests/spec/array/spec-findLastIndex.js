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

    });

});
