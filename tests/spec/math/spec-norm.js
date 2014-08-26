define(['mout/math/norm'], function (norm) {

    describe('math/norm()', function(){

        it('should normalize value inside range', function(){
            expect( norm(50, 0, 100) ).toEqual(0.5);
            expect( norm(200, 0, 500) ).toEqual(0.4);
            expect( norm(200, 0, 1000) ).toEqual(0.2);
            expect( norm(1000, 1000, 1001) ).toEqual(0);
        });

        it('should throw if value outside range', function(){
            expect( norm.bind(null, 1500, 0, 1000) ).toThrow();
            expect( norm.bind(null, -1500, 0, 1000) ).toThrow();
        });

        it('should return 1 if min equals max', function(){
            expect( norm(100, 100, 100) ).toEqual(1);
        });

        it('should throw error if value outside range', function() {
            expect(function() {
                norm(-50, 0, 100)
            }).toThrow('value (-50) must be between 0 and 100');
        });

    });
});
