define(['src/array/every'], function (every) {

    describe('array/every()', function(){

        var isEven = function(val, i, arr){
            return (val % 2 === 0);
        };

        it('should work on normal array', function () {
            var a1 = [1, 2, 3];
            var a2 = [1, 3, 5];
            var a3 = [2, 4, 6];

            expect( every(a1, isEven) ).toBe( false );
            expect( every(a2, isEven) ).toBe( false );
            expect( every(a3, isEven) ).toBe( true );
        });

        it('should work on sparse array', function () {
            var a1 = [1, 2, 3];
            a1[10] = 8;
            var a2 = [1, 3, 5];
            a2[10] = 7;
            var a3 = [2, 4, 6];
            a3[10] = 10;

            expect( every(a1, isEven) ).toBe( false );
            expect( every(a2, isEven) ).toBe( false );
            expect( every(a3, isEven) ).toBe( true );
        });

        it('should work on empty arrays', function () {
            //t is vacuously true that all elements of the empty set satisfy any given condition.
            expect( every([], isEven) ).toBe( true );
        });

    });


});

