define(['mout/array/pluck'], function (pluck) {

    describe('array/pluck()', function () {

        it('should extract properties from items', function () {

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

        it('should allow source array to be null/undefined', function () {
            expect( pluck(null, 'foo') ).toEqual( [] );
            expect( pluck(undefined, 'foo') ).toEqual( [] );
        });

    });

});
