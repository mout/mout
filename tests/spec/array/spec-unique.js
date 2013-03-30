define(['mout/array/unique'], function (unique) {

    describe('array/unique()', function(){

        it('should remove duplicates', function(){

            var source = ['a', 1, 2, 'c', 'b', 2 , 1, 'b', 'c'];
            var result = unique(source);

            expect( result.length ).toEqual( 5 );
            expect( source.length ).toEqual( 9 );

            expect( result ).toEqual(['a', 2, 1, 'b', 'c']);

        });

        it('should return empty array if source array is null/undefined', function(){
            expect( unique(null) ).toEqual( [] );
            expect( unique(undefined) ).toEqual( [] );
        });

    });

});
