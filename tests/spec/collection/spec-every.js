define(['mout/collection/every'], function(every){

    describe('collection/every', function(){

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

        it('should iterate over sparse items. see #64', function () {
            var a1 = [1, 2, 3];
            a1[10] = 8;
            var a2 = [1, 3, 5];
            a2[10] = 7;
            var a3 = [2, 4, 6];
            a3[10] = 10;

            // IMPORTANT
            // ---------
            // this behavior is different than ES5 Array#every
            expect( every(a1, isEven) ).toBe( false );
            expect( every(a2, isEven) ).toBe( false );
            expect( every(a3, isEven) ).toBe( false );
            expect( every(a3, function(val){
                return val == null || (val % 2 === 0);
            }) ).toBe( true );
        });

        it('should work on empty arrays', function () {
            //it is vacuously true that all elements of the empty set satisfy any given condition.
            expect( every([], isEven) ).toBe( true );
        });

        it('should loop forwards to avoid undesired behavior', function () {
            // not that the loop order should matter on a truth check over all
            // elements
            var a1 = [1, 3, 7];
            var result = [];
            expect( every(a1, function(val, i, arr){
                result.push(val);
                return val !== 8;
            }) ).toEqual( true );
            expect( result ).toEqual( [1, 3, 7] );

        });

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



        it('should support shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:1},
                '1' : {foo:'bar', lorem:'ipsum', id:2},
                '2' : {foo:'bar', lorem:'ipsum', id:4}
            };
            var arr = [obj[0], obj[1], obj[2]];

            expect( every(obj, {foo:'bar', lorem:'ipsum'}) ).toEqual( true );
            expect( every(obj, {lorem:'ipsum', id:1}) ).toEqual( false );
            expect( every(obj, {amet:123}) ).toEqual( false );

            expect( every(arr, {foo:'bar', lorem:'ipsum'}) ).toEqual( true );
            expect( every(arr, {lorem:'ipsum', id:1}) ).toEqual( false );
            expect( every(arr, {amet:123}) ).toEqual( false );
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                '0' : {foo:'bar', lorem:'ipsum', id:1},
                '1' : {foo:'bar', lorem:'ipsum', id:2},
                '2' : {foo:'bar', lorem:'ipsum', id:0}
            };
            var arr = [obj[0], obj[1], obj[2]];

            expect( every(obj, 'foo') ).toEqual( true );
            expect( every(obj, 'id') ).toEqual( false );
            expect( every(obj, 'amet') ).toEqual( false );

            expect( every(arr, 'foo') ).toEqual( true );
            expect( every(arr, 'id') ).toEqual( false );
            expect( every(arr, 'amet') ).toEqual( false );
        });


    });
});
