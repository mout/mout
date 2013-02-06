define(['mout/lang/isnt'], function(isnt){

    describe('lang/isnt', function(){

        it('should return true if arguments are not identical', function(){
            expect( isnt(true, false) ).toBe(true);
            expect( isnt(1, true) ).toBe(true);
            expect( isnt(1, 0) ).toBe(true);
            expect( isnt(-0, +0) ).toBe(true); // yes, they are not identical
            expect( isnt('a', 'b') ).toBe(true);
            expect( isnt({}, {}) ).toBe(true);
            expect( isnt([], []) ).toBe(true);
            expect( isnt(NaN, 'NaN') ).toBe(true);
            expect( isnt(Infinity, -Infinity) ).toBe(true);
        });


        it('should return false if arguments are identical', function(){
            expect( isnt(true, true) ).toBe(false);
            expect( isnt(1, 1) ).toBe(false);
            expect( isnt(0, 0) ).toBe(false);
            expect( isnt('a', 'a') ).toBe(false);
            var obj = {};
            expect( isnt(obj, obj) ).toBe(false);
            var arr = [];
            expect( isnt(arr, arr) ).toBe(false);
            expect( isnt(NaN, NaN) ).toBe(false);
            expect( isnt(Infinity, Infinity) ).toBe(false);
        });

    });

});
