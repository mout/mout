define(['mout/array/findBy'], function(findBy){

    describe('array/findBy', function(){

        it('should return first element that matches criteria(s)', function(){
            var arr = [
                {
                    firstName : 'john',
                    lastName : 'doe'
                },
                {
                    firstName : 'john',
                    lastName : 'smith'
                },
                {
                    firstName : 'jane',
                    lastName : 'smith'
                }
            ];
            expect( findBy(arr, {firstName : 'john'}) ).toBe( arr[0] );
            expect( findBy(arr, {firstName : 'jane'}) ).toBe( arr[2] );
            expect( findBy(arr, {lastName : 'smith'}) ).toBe( arr[1] );

            expect( findBy(arr, {firstName : 'john', lastName : 'smith'}) ).toBe( arr[1] );
        });


    });

});
