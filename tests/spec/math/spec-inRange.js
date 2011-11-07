define(['src/math/inRange'], function (inRange) {

    describe('math/inRange()', function(){

        it('should return true if val is inside range', function(){
            expect( inRange(6, 1, 10) ).toEqual(true);
            expect( inRange(55, 1, 100) ).toEqual(true);
            expect( inRange(0, -50, 50) ).toEqual(true);
            expect( inRange(-6, -10, -2) ).toEqual(true);

            expect( inRange(10, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(true);
            expect( inRange(1234567890, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(true);
        });

        it('should return false if val is outside range', function(){
            expect( inRange(-6, 1, 10) ).toEqual(false);
            expect( inRange(555, 1, 100) ).toEqual(false);
            expect( inRange(51, -50, 50) ).toEqual(false);
            expect( inRange(-11, -10, -2) ).toEqual(false);
        });

        it('should tolerate threshold', function(){
            expect( inRange(12, 1, 10, 2) ).toEqual(true);
            expect( inRange(500, 1, 100, 400) ).toEqual(true);
            expect( inRange(12, 1, 10, 1) ).toEqual(false);
            expect( inRange(500, 1, 100, 300) ).toEqual(false);

            expect( inRange(10.5, 1, 10, 0.5) ).toEqual(true);
            expect( inRange(10.5, 1, 10, 0.25) ).toEqual(false);
        });

    });
});
