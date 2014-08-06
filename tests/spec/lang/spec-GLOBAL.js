define(['mout/lang/GLOBAL'], function(GLOBAL){

    describe('lang/GLOBAL', function(){

        it('should return the global object', function(){
            // we use duck typing since that should be good enough
            expect( GLOBAL.setTimeout ).not.toBeUndefined();
            expect( GLOBAL.isNaN ).not.toBeUndefined();
            expect( GLOBAL.decodeURI ).not.toBeUndefined();
        });

    });

});
