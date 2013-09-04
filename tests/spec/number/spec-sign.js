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

        it('should return +0 if number is +0', function () {
            expect( 1 / sign(+0) ).toBe( Infinity );
        });

        it('should return -0 if number is -0', function () {
            expect( 1 / sign(-0) ).toBe( -Infinity );
        });

        it('should return NaN if value is NaN', function () {
            expect( sign(NaN) ).toBeNaN();
        });

        it('should return NaN if value is not a Number', function () {
            expect( sign('foo') ).toBeNaN();
        });

        it('should typecast value into a number', function () {
            expect( sign('-123') ).toEqual( -1 );
            expect( sign('123') ).toEqual( 1 );
            expect( sign('') ).toEqual( 0 );
            expect( sign(null) ).toEqual( 0 );
            expect( sign(undefined) ).toEqual( 0 );
            expect( sign([]) ).toBeNaN();
            expect( sign([1]) ).toBeNaN();
        });

    });

});
