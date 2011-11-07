define(['src/array/isSparse'], function (isSparse) {

    describe('array/isSparse()', function(){

        it('should check if array contain empty items', function(){
            var arr = ['foo'];
            arr[6] = 'bar';
            expect( isSparse(arr) ).toBe( true );
        });

        it('should not give false positives', function(){
            var arr = ['foo', false, null, 123, 'bar', undefined, 'dolor'];
            expect( isSparse(arr) ).toBe( false );
        });

    });

});
