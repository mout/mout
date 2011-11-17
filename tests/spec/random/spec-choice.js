define(['src/random/choice'], function (choice) {

    describe('random/choice()', function () {

        beforeEach(function(){
            this.addMatchers({
                toDiffAny : function(vals){
                    var n = arguments.length;
                    while(n--){
                        if(this.actual !== arguments[n]) return true;
                    }
                    return false;
                }
            });
        });


        it('should pick a random argument', function(){

            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            var q = choice.apply(null, arr);
            var w = choice.apply(null, arr);
            var e = choice.apply(null, arr);
            var r = choice.apply(null, arr);
            var t = choice.apply(null, arr);
            var y = choice(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            var u = choice(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            var i = choice(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            var o = choice(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

            expect( arr ).toContain( q );
            expect( arr ).toContain( w );
            expect( arr ).toContain( e );
            expect( arr ).toContain( r );
            expect( arr ).toContain( t );
            expect( arr ).toContain( y );

            expect( q ).toDiffAny(w, e, r, t, y, u, i, o);
        });

        it('should work with array', function(){

            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            var q = choice(arr);
            var w = choice(arr);
            var e = choice(arr);
            var r = choice(arr);
            var t = choice(arr);
            var y = choice(arr);
            var u = choice(arr);
            var i = choice(arr);
            var o = choice(arr);

            expect( arr ).toContain( q );
            expect( arr ).toContain( w );
            expect( arr ).toContain( e );
            expect( arr ).toContain( r );
            expect( arr ).toContain( t );
            expect( arr ).toContain( y );

            expect( q ).toDiffAny(w, e, r, t, y, u, i, o);
        });

    });


});

