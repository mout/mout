define(['src/array/invoke'], function(invoke){

    describe('array/invoke', function(){

        it('should call methods on each item', function(){
            var items = [[3,2,1], [9,5,2]];
            invoke(items, 'sort'); //sort is done in place
            expect( items[0] ).toEqual( [1,2,3] );
            expect( items[1] ).toEqual( [2,5,9] );
        });

        it('allow passing custom args', function () {
            var items = [
                {
                    count : 0,
                    add : function(a, b){
                        this.count += a + b;
                    }
                },
                {
                    count : 0,
                    add : function(a, b, c){
                        this.count += a + b + c;
                    }
                }
            ];
            invoke(items, 'add', 1, 2, 3);
            expect( items[0].count ).toBe( 3 );
            expect( items[1].count ).toBe( 6 );
        });

        it('should return source array', function () {
            var arr = [[3,2,1], [4, 2, 8]];
            expect( invoke(arr, 'sort') ).toBe( arr );
        });

    });

});
