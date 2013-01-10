define(['mout/math/floor'], function (floor) {

    describe('math/floor()', function(){

        it('floor value to full steps', function(){
            expect( floor(12.5) ).toEqual(12);
            expect( floor(12, 5) ).toEqual(10);
            expect( floor(17, 5) ).toEqual(15);
            expect( floor(122, 10) ).toEqual(120);
            expect( floor(129, 10) ).toEqual(120);
        });
    });
});
