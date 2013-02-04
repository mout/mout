define(['mout/object/matches'], function(matches){

    describe('object/matches', function(){

        it('should check if target contains all given properties', function(){
            expect( matches({a:1,b:2,c:3}, {a:1}) ).toBe( true );
            expect( matches({a:1,b:2,c:3}, {b:2}) ).toBe( true );
            expect( matches({a:1,b:2,c:3}, {d:4}) ).toBe( false );
            expect( matches({a:1,c:3}, {a:1, c:3}) ).toBe( true );
            expect( matches({a:1,c:3}, {a:1, c:3, d:4}) ).toBe( false );
            expect( matches({a:1,c:3}, {b:2}) ).toBe( false );
            expect( matches({a:1}, {a:1, c:3}) ).toBe( false );
        });

    });

});
