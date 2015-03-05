define(['mout/object/deepMatches'], function(deepMatches){

    describe('object/deepMatches', function(){

        it('should match objects', function(){
            var obj = { a: 1, b: 'b', c: null };
            expect( deepMatches(obj, { a: 1 }) ).toBe(true);
            expect( deepMatches(obj, { b: 'b' }) ).toBe(true);
            expect( deepMatches(obj, { c: null }) ).toBe(true);
            expect( deepMatches(obj, { a: 1, b: 'b', c: null }) ).toBe(true);
        });

        it('should not match objects with different values', function(){
            var obj = { a: 1, b: 'b', c: null };
            expect( deepMatches(obj, { a: 2 }) ).toBe(false);
            expect( deepMatches(obj, { b: 'a' }) ).toBe(false);
            expect( deepMatches(obj, { c: 'c' }) ).toBe(false);
        });

        it('should use strict comparison for values', function(){
            var obj = { a: 1, b: null };
            expect( deepMatches(obj, { a: '1' }) ).toBe(false);
            expect( deepMatches(obj, { b: undefined }) ).toBe(false);
        });

        it('should recursively match objects', function(){
            var obj = { a: { b: 1, c: 'c' } };
            expect( deepMatches(obj, { a: { b: 1 } }) ).toBe(true);
            expect( deepMatches(obj, { a: { c: 'c' } }) ).toBe(true);
            expect( deepMatches(obj, { a: { b: 2 } }) ).toBe(false);
        });

        it('should match arrays', function(){
            var arr = [1, 2, 'a', 'b'];
            expect( deepMatches(arr, [1, 2]) ).toBe(true);
            expect( deepMatches(arr, [2, 'b']) ).toBe(true);
            expect( deepMatches(arr, [3]) ).toBe(false);
            expect( deepMatches(arr, ['a', 3]) ).toBe(false);
        });

        it('should match arrays regardless of value order', function(){
            var arr = [1, 2, 'a', 'b'];
            expect( deepMatches(arr, ['a', 1]) ).toBe(true);
        });

        it('should recursively match arrays and objects', function(){
            var obj = { a: [1, { b: 2, c: ['a', 'b', 'c'] } ] };
            expect( deepMatches(obj, { a: [1] }) ).toBe(true);
            expect( deepMatches(obj, { a: [ { b: 2 } ] }) ).toBe(true);
            expect( deepMatches(obj, { a: [ { c: ['b', 'c'] } ] }) ).toBe(true);
            expect( deepMatches(obj, { a: [ { c: ['b', 'd'] } ] }) ).toBe(false);
        });

        it('should not duck-type arrays', function(){
            var obj = { a: [0, 2, 3] };
            expect( deepMatches(obj, { a: { length: 1, "0": 0 } }) ).toBe(false);
        });

        it('should match array properties with object', function(){
            var obj = { a: [1, 2] };
            expect( deepMatches(obj, { a: { length: 2 } }) ).toBe(true);
        });

        it('should not match objects against primitives', function() {
           var actual = { prop: {} };
           var shouldMatch = { prop: 42 };
           expect( deepMatches(actual, shouldMatch) ).toBe(false);
        });

        it('should not match against undefined', function() {
           var obj = { prop: {} };
           expect( deepMatches(obj, undefined) ).toBe(false);
        });

        it('should not match if prop is undefined', function() {
           var obj = { prop: {} };
           expect( deepMatches(obj, { prop: undefined }) ).toBe(false);
        });

    });

});
