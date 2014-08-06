define(['mout/lang/global'], function(global){

    describe('lang/global', function(){

        it('should return the global object', function(){
            // we use duck typing since that should be good enough
            expect( global.setTimeout ).not.toBeUndefined();
            expect( global.isNaN ).not.toBeUndefined();
            expect( global.decodeURI ).not.toBeUndefined();
        });

    });

});
