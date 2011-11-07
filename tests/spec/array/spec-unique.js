define(['src/array/unique'], function (unique) {

    describe('array/unique()', function(){

        it('should remove duplicates', function(){

            var source = ['a', 1, 2, 'c', 'b', 2 , 1, 'b', 'c'];
            var result = unique(source);

            expect( result.length ).toEqual( 5 );
            expect( source.length ).toEqual( 9 );

            expect( result.join(',') ).toEqual('a,2,1,b,c');

        });

    });

});
