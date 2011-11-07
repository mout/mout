define(['src/math/map'], function (map) {

    describe('math/map()', function(){

        it('map a number from one scale to another', function(){
            expect( map(5, 0, 10, 10, 20) ).toEqual(15);
            expect( map(-50, -100, 0, 0, 100) ).toEqual(50);
            expect( map(0, -1, 1, 0, 100) ).toEqual(50);
        });

    });
});
