define(['src/math/countSteps'], function (countSteps) {

    describe('math/countSteps()', function(){

        it('count number of full steps', function(){
            expect( countSteps(12, 5) ).toEqual(2);
            expect( countSteps(17, 5) ).toEqual(3);
            expect( countSteps(122, 10) ).toEqual(12);
            expect( countSteps(129, 10) ).toEqual(12);
        });

    });
});
