define(['src/math/isNear'], function (isNear) {

    describe('math/isNear()', function(){

        it('should return true if val is close to target +/- threshold', function(){
            expect( isNear(10.5, 10, 0.5) ).toEqual(true);
            expect( isNear(9.5, 10, 0.5) ).toEqual(true);
            expect( isNear(9.9, 10, 0.5) ).toEqual(true);
            expect( isNear(10.1, 10, 0.5) ).toEqual(true);
            expect( isNear(10, 10, 0.5) ).toEqual(true);
        });

        it('should return false if val is far from target +/- threshold', function(){
            expect( isNear(10.51, 10, 0.5) ).toEqual(false);
            expect( isNear(9.45, 10, 0.5) ).toEqual(false);
            expect( isNear(9.1, 10, 0.5) ).toEqual(false);
            expect( isNear(10.9, 10, 0.5) ).toEqual(false);
            expect( isNear(8, 10, 0.5) ).toEqual(false);
        });

    });

});
