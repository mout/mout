define(['src/number/toUInt'], function (toUInt) {

    describe('number/toUInt()', function(){

        it('should remove decimal digits and limit to positive numbers', function(){
            expect( toUInt(1.25) ).toEqual(1);
            expect( toUInt(0.75) ).toEqual(0);
            expect( toUInt(-0.55) ).toEqual(0);
            expect( toUInt(2.999) ).toEqual(2);
            expect( toUInt(10.0001) ).toEqual(10);
            expect( toUInt(-5.0001) ).toEqual(0);
            expect( toUInt(-9.99999) ).toEqual(0);
        });
    });
});
