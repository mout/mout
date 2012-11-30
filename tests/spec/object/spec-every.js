define(['amd-utils/object/every'], function(every){

    describe('object/every', function(){

        var isEven = function(val, key, obj){
            return (val % 2 === 0);
        };

        it('should work on normal object', function () {
            var a1 = {a: 1, b: 2, c: 3};
            var a2 = {a: 1, b: 3, c: 5};
            var a3 = {a: 2, b: 4, c: 6};

            expect( every(a1, isEven) ).toBe( false );
            expect( every(a2, isEven) ).toBe( false );
            expect( every(a3, isEven) ).toBe( true );
        });

        it('should work on empty objects', function () {
            expect( every({}, isEven) ).toBe( true );
        });

        it('should avoid don\'t enum bug on IE 7-8', function () {
            var a1 = {a:2, toString:3};
            var a2 = {a:2, toString:4};
            expect( every(a1, isEven) ).toBe( false );
            expect( every(a2, isEven) ).toBe( true );
        });

    });

});
