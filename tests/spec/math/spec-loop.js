define(['src/math/loop'], function (loop) {

    describe('math/loop()', function(){

        it('should return `min` if `val` is bigger than `max`', function(){
            expect( loop(11, 0, 10) ).toEqual(0);
            expect( loop(9999999, 999, 9999) ).toEqual(999);
            expect( loop(-500, -1000, -750) ).toEqual(-1000);
        });

        it('should return `max` if `val` is smaller than `min`', function(){
            expect( loop(-1, 0, 10) ).toEqual(10);
            expect( loop(99, 999, 9999) ).toEqual(9999);
            expect( loop(-1005, -1000, -750) ).toEqual(-750);
        });

        it('should return val if inside range', function(){
            expect( loop(6, 1, 10) ).toEqual(6);
            expect( loop(55, 1, 100) ).toEqual(55);
            expect( loop(0, -50, 50) ).toEqual(0);
            expect( loop(-6, -10, -2) ).toEqual(-6);

            expect( loop(10, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(10);
            expect( loop(1234567890, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(1234567890);
        });

    });
});
