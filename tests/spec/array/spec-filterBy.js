define(['mout/array/filterBy'], function(filterBy){

    describe('array/filterBy', function(){

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
            expect( filterBy(arr, {firstName : 'john'}) ).toEqual( [arr[0], arr[1]] );
            expect( filterBy(arr, {firstName : 'jane'}) ).toEqual( [arr[2]] );
            expect( filterBy(arr, {lastName : 'smith'}) ).toEqual( [arr[1], arr[2]] );

            expect( filterBy(arr, {firstName : 'john', lastName : 'smith'}) ).toEqual( [arr[1]] );
        });

    });

});
