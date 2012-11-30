define(['amd-utils/object/some'], function(some){

    describe('object/some', function(){

        var isEven = function(val, key, obj){
            return (val % 2 === 0);
        };

        it('should work on normal object', function () {
            var a1 = {a: 1, b: 2, c: 3};
            var a2 = {a: 1, b: 3, c: 5};
            var a3 = {a: 2, b: 4, c: 6};

            expect( some(a1, isEven) ).toBe( true );
            expect( some(a2, isEven) ).toBe( false );
            expect( some(a3, isEven) ).toBe( true );
        });

        it('should work on empty objects', function () {
            expect( some({}, isEven) ).toBe( false );
        });

        it('should avoid don\'t enum bug on IE 7-8', function () {
            var a1 = {a:1, toString:2};
            var a2 = {a:1, toString:3};
            expect( some(a1, isEven) ).toBe( true );
            expect( some(a2, isEven) ).toBe( false );
        });

    });

});
