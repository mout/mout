define(['mout/lang/is'], function(is){

    describe('lang/is', function(){

        it('should return false if arguments are not identical', function(){
            expect( is(true, false) ).toBe(false);
            expect( is(1, true) ).toBe(false);
            expect( is(1, 0) ).toBe(false);
            expect( is(-0, +0) ).toBe(false); // yes, they are not identical
            expect( is('a', 'b') ).toBe(false);
            expect( is({}, {}) ).toBe(false);
            expect( is([], []) ).toBe(false);
            expect( is(NaN, 'NaN') ).toBe(false);
            expect( is(Infinity, -Infinity) ).toBe(false);
        });


        it('should return true if arguments are identical', function(){
            expect( is(true, true) ).toBe(true);
            expect( is(1, 1) ).toBe(true);
            expect( is(0, 0) ).toBe(true);
            expect( is('a', 'a') ).toBe(true);
            var obj = {};
            expect( is(obj, obj) ).toBe(true);
            var arr = [];
            expect( is(arr, arr) ).toBe(true);
            expect( is(NaN, NaN) ).toBe(true);
            expect( is(Infinity, Infinity) ).toBe(true);
        });


    });

});
