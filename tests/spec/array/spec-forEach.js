define(['src/array/forEach'], function (forEach) {

    describe('array/forEach()', function(){

        it('should loop and pass params to callback', function(){
            var result = 0;
            var items = [1,2,3,4,5];

            forEach(items, function(val, i, arr){
                expect( arr ).toBe( items );
                expect( val ).toBe( items[i] );
                result += val;
            });

            expect( result ).toBe( 15 );
        });

    });

});

