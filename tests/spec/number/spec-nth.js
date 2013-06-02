define(['mout/number/nth'], function(nth){

    describe('number/nth', function(){

        it('should return "st" for numbers ending in "1" besides numbers that ends in "11"', function(){
            expect( nth(1) ).toBe('st');
            expect( nth(11) ).not.toBe('st');
            expect( nth(21) ).toBe('st');
            expect( nth(31) ).toBe('st');
            expect( nth(51) ).toBe('st');
            expect( nth(101) ).toBe('st');
            expect( nth(111) ).not.toBe('st');
            expect( nth(121) ).toBe('st');
            expect( nth(1001) ).toBe('st');
            expect( nth(1011) ).not.toBe('st');
            expect( nth(1021) ).toBe('st');
        });

        it('should return "th" for numbers ending in "11"', function () {
            expect( nth(11) ).toEqual('th');
            expect( nth(111) ).toEqual('th');
            expect( nth(211) ).toEqual('th');
            expect( nth(1011) ).toEqual('th');
        });

        it('should return "nd" for numbers ending in "2" besides numbers that ends in "12"', function () {
            expect( nth(2) ).toEqual('nd');
            expect( nth(12) ).not.toEqual('nd');
            expect( nth(22) ).toEqual('nd');
            expect( nth(212) ).not.toEqual('nd');
            expect( nth(232) ).toEqual('nd');
            expect( nth(1012) ).not.toEqual('nd');
            expect( nth(1052) ).toEqual('nd');
        });

        it('should return "th" for numbers ending in "12"', function () {
            expect( nth(12) ).toEqual('th');
            expect( nth(112) ).toEqual('th');
            expect( nth(212) ).toEqual('th');
            expect( nth(1012) ).toEqual('th');
        });

        it('should return "rd" for numbers ending in "3" besides numbers that ends in "13"', function () {
            expect( nth(3) ).toEqual('rd');
            expect( nth(13) ).not.toEqual('rd');
            expect( nth(23) ).toEqual('rd');
            expect( nth(233) ).toEqual('rd');
            expect( nth(1013) ).not.toEqual('rd');
            expect( nth(1053) ).toEqual('rd');
        });

        it('should return "th" for numbers ending in "13"', function () {
            expect( nth(13) ).toEqual('th');
            expect( nth(113) ).toEqual('th');
            expect( nth(213) ).toEqual('th');
            expect( nth(1013) ).toEqual('th');
        });

        it('should return "th" for numbers ending in "4, 5, 6, 7, 8, 9, 0', function () {
            expect( nth(0) ).toEqual('th');
            expect( nth(4) ).toEqual('th');
            expect( nth(5) ).toEqual('th');
            expect( nth(6) ).toEqual('th');
            expect( nth(7) ).toEqual('th');
            expect( nth(8) ).toEqual('th');
            expect( nth(9) ).toEqual('th');
            expect( nth(104) ).toEqual('th');
            expect( nth(115) ).toEqual('th');
            expect( nth(216) ).toEqual('th');
            expect( nth(1017) ).toEqual('th');
            expect( nth(2018) ).toEqual('th');
            expect( nth(123019) ).toEqual('th');
            expect( nth(9281230) ).toEqual('th');
        });

    });

});
