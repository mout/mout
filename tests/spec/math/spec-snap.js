define(['src/math/snap'], function (snap) {

    describe('math/snap()', function(){

        it('snap value to full steps', function(){
            expect( snap(12, 5) ).toEqual(10);
            expect( snap(17, 5) ).toEqual(15);
            expect( snap(122, 10) ).toEqual(120);
            expect( snap(129, 10) ).toEqual(120);
        });
    });
});
