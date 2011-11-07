define(['src/math/clamp'], function (clamp) {

    describe('math/clamp()', function(){

        it('should return max if val bigger than max', function(){
            expect( clamp(10, 1, 10) ).toEqual(10);
            expect( clamp(11, 1, 10) ).toEqual(10);
            expect( clamp(12, 1, 10) ).toEqual(10);
            expect( clamp(9999, 1, 10) ).toEqual(10);
            expect( clamp(Number.MAX_VALUE, 1, 10) ).toEqual(10);

            expect( clamp(-2, -10, -2) ).toEqual(-2);
            expect( clamp(-1, -10, -2) ).toEqual(-2);
            expect( clamp(0, -10, -2) ).toEqual(-2);
            expect( clamp(10, -10, -2) ).toEqual(-2);
        });

        it('should return min if val smaller than min', function(){
            expect( clamp(1, 1, 10) ).toEqual(1);
            expect( clamp(-11, 1, 10) ).toEqual(1);
            expect( clamp(0, 1, 10) ).toEqual(1);
            expect( clamp(-9999, 1, 10) ).toEqual(1);
            expect( clamp(- Number.MAX_VALUE, 1, 10) ).toEqual(1);

            expect( clamp(- Number.MAX_VALUE, -10, -2) ).toEqual(-10);
            expect( clamp(-12, -10, -2) ).toEqual(-10);
            expect( clamp(-11, -10, -2) ).toEqual(-10);
            expect( clamp(-10, -10, -2) ).toEqual(-10);
        });

        it('should return val if inside range', function(){
            expect( clamp(6, 1, 10) ).toEqual(6);
            expect( clamp(55, 1, 100) ).toEqual(55);
            expect( clamp(0, -50, 50) ).toEqual(0);
            expect( clamp(-6, -10, -2) ).toEqual(-6);

            expect( clamp(10, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(10);
            expect( clamp(1234567890, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(1234567890);
        });

    });

});
