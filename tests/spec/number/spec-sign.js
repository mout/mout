define(['src/number/sign'], function (sign) {

    describe('number/sign()', function () {

        it('should return -1 if number is negative', function () {
            expect( sign(-123) ).toEqual(-1);
            expect( sign(-0.5) ).toEqual(-1);
            expect( sign(- Math.pow(2,32)) ).toEqual(-1);
        });

        it('should return +1 if number is positive or zero', function () {
            expect( sign(0) ).toEqual(1);
            expect( sign(123) ).toEqual(1);
            expect( sign(0.5) ).toEqual(1);
            expect( sign(Math.pow(2,32)) ).toEqual(1);
        });

    });

});
