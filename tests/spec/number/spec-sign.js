define(['mout/number/sign'], function (sign) {

    describe('number/sign()', function () {

        it('should return -1 if number is negative', function () {
            expect( sign(-123) ).toEqual(-1);
            expect( sign(-0.5) ).toEqual(-1);
            expect( sign(- Math.pow(2,32)) ).toEqual(-1);
        });

        it('should return +1 if number is positive', function () {
            expect( sign(123) ).toEqual(1);
            expect( sign(0.5) ).toEqual(1);
            expect( sign(Math.pow(2,32)) ).toEqual(1);
        });

        it('should return 0 if number is 0', function () {
            expect( sign(0) ).toEqual(0);
        });

    });

});
