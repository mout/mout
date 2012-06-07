define(['src/array/some'], function (some) {

    describe('array/some()', function(){

        var isEven = function(val, i, arr){
            return (val % 2 === 0);
        };

        it('should work on normal array', function () {
            var a1 = [1, 2, 3];
            var a2 = [1, 3, 5];
            var a3 = [2, 4, 6];

            expect( some(a1, isEven) ).toBe( true );
            expect( some(a2, isEven) ).toBe( false );
            expect( some(a3, isEven) ).toBe( true );
        });

        it('should work on sparse array', function () {
            var a1 = [1, 2, 3];
            a1[10] = 8;
            var a2 = [1, 3, 5];
            a2[10] = 7;
            var a3 = [2, 4, 6];
            a3[10] = 10;

            expect( some(a1, isEven) ).toBe( true );
            expect( some(a2, isEven) ).toBe( false );
            expect( some(a3, isEven) ).toBe( true );
        });

        it('should work on empty arrays', function () {
            expect( some([], isEven) ).toBe( false );
        });

        it('should be incremental', function () {
            var a = [1, 2, 3];
            var compare = [];
            expect( some(a, function(val){
                compare.push(val);
                return val === 3;
            }) ).toBe( true );
            expect( a ).toEqual( compare );
        });

    });
});
