define(['mout/collection/pluck'], function(pluck){

    describe('collection/pluck', function(){

        it('should extract properties from items (array)', function () {

            var users = [
                {
                    name : 'John',
                    age : 21
                },
                {
                    name : 'Mary',
                    age : 25
                },
                {
                    name : 'Jane',
                    age : 27
                }
            ];

            expect( pluck(users, 'name') ).toEqual( ['John', 'Mary', 'Jane'] );
            expect( pluck(users, 'age') ).toEqual( [21, 25, 27] );
        });

        it('should extract properties from items (object)', function () {

            var users = {
                first: {
                    name : 'John',
                    age : 21
                },
                second: {
                    name : 'Mary',
                    age : 25
                },
                third: {
                    name : 'Jane',
                    age : 27
                }
            };

            expect( pluck(users, 'name') ).toEqual( ['John', 'Mary', 'Jane'] );
            expect( pluck(users, 'age') ).toEqual( [21, 25, 27] );

        });

    });

});
