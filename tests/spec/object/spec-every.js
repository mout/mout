define(['mout/object/every'], function(every){

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


        it('should support shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:4}
            };
            expect( every(obj, {foo:'bar', lorem:'ipsum'}) ).toEqual( true );
            expect( every(obj, {lorem:'ipsum', id:1}) ).toEqual( false );
            expect( every(obj, {amet:123}) ).toEqual( false );
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:0}
            };
            expect( every(obj, 'foo') ).toEqual( true );
            expect( every(obj, 'id') ).toEqual( false );
            expect( every(obj, 'amet') ).toEqual( false );
        });


    });

});
