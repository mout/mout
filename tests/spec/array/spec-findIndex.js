define(['mout/array/findIndex'], function(findIndex){

    describe('array/findIndex', function(){

        it('should return index of first match', function(){
            var items = [1, 'foo', 'bar', { a: 1 }];

            var findOne = function(val) { return val === 1; },
                isString = function(val) { return typeof val === 'string' },
                findObj = function(val) { return val.a === 1; };

            expect( findIndex(items, findOne) ).toEqual(0);
            expect( findIndex(items, isString) ).toEqual(1);
            expect( findIndex(items, findObj) ).toEqual(3);
        });

        it('should support object shortcut syntax', function(){
            var items = [1, 'foo', 'bar', { a: 1 }];

            expect( findIndex(items, { a: 1 }) ).toEqual(3);
        });

        it('should support string shortcut syntax', function(){
            var items = [1, 'foo', 'bar', { a: 1 }];

            expect( findIndex(items, 'a') ).toEqual(3);
        });

        it('should return -1 when not found', function(){
            var items = [1, 'foo', 'bar', { a: 1 }];
            var findTwo = function(val) { return val === 2; };

            expect( findIndex(items, findTwo) ).toEqual(-1);
        });

        it('should return -1 when array is null/undefined', function(){
            var testFunc = function() { return true; };

            expect( findIndex(null, testFunc) ).toBe( -1 );
            expect( findIndex(undefined, testFunc) ).toBe( -1 );
        });

    });

});
