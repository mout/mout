define(['mout/array/collect'], function(collect){

    describe('array/collect', function(){

        it('should map items and concatenate results', function(){
            var source = [0, 1, 2, 3], thisObj = {};
            var result = collect(source, function(value) {
                var i = 0, arr = [];
                while (i++ < value) {
                    arr.push(value);
                }

                expect( this ).toBe( thisObj );
                return arr;
            }, thisObj);

            expect(result).toEqual( [1, 2, 2, 3, 3, 3] );
        });

        it('should allow undefined map result', function(){
            var source = [1, 2, 3, 4];
            var result = collect(source, function(value){
                if (value % 2 !== 0) {
                    return [value];
                }
            });

            expect( result ).toEqual( [1, 3] );
        });

        it('should loop even if array is sparse', function(){
            function toOne() { return [1]; }

            var base = new Array(3);
            var result = collect(base, toOne);
            expect( result ).toEqual( [1, 1, 1] );

            base[5] = 'foo';
            result = collect(base, toOne);
            expect( result ).toEqual( [1, 1, 1, 1, 1, 1] );
        });

        it('should return empty array if target is null/undefined', function(){
            expect( collect(null) ).toEqual( [] );
            expect( collect(undefined) ).toEqual( [] );
        });

        it('should allow shorthand syntax (same as "pluck")', function(){
            var arr = [{ a: [] }, { b: 1 }, { a: [1] }, { a: [2, 3] }];
            expect( collect(arr, 'a') ).toEqual( [1, 2, 3] );
        });

    });

});
