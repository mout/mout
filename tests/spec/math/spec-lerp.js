define(['src/math/lerp'], function (lerp) {

    describe('math/lerp()', function(){

        it('interpolate values', function(){
            expect( lerp(0.5, 0, 10) ).toEqual(5);
            expect( lerp(0.75, 0, 100) ).toEqual(75);
            expect( lerp(0.66, 0, 1000) ).toEqual(660);
            expect( lerp(1, 0, 1000) ).toEqual(1000);
            expect( lerp(0, 0, 1000) ).toEqual(0);
        });

    });

});
