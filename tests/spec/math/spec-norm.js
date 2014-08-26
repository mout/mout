define(['mout/math/norm'], function (norm) {

    describe('math/norm()', function(){

        it('should normalize value inside range', function(){
            expect( norm(50, 0, 100) ).toEqual(0.5);
            expect( norm(200, 0, 500) ).toEqual(0.4);
            expect( norm(200, 0, 1000) ).toEqual(0.2);
        });

        it('should calculate ratio even outside range', function(){
            expect( norm(1500, 0, 1000) ).toEqual(1.5);
            expect( norm(-1500, 0, 1000) ).toEqual(-1.5);
        });

        it('should calculate ratio even if min equals max', function(){
            expect( norm(100, 100, 100) ).toEqual(1);
            expect( norm(200, 100, 100) ).toEqual(2);
        });

    });
});
