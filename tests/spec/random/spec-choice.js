define(['mout/random/choice', './helper-mockRandom'], function (choice, mockRandom) {

    describe('random/choice()', function () {

        beforeEach(function(){
            mockRandom.start();
        });

        afterEach(function() {
            mockRandom.end();
        });

        it('should pick a random argument', function(){
            var choices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            var a = choice.apply(null, choices),
                b = choice.apply(null, choices);

            expect( choices ).toContain( a );
            expect( choices ).toContain( b );
            expect( a ).not.toEqual( b );
        });

        it('should work with array', function(){
            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            var a = choice(arr),
                b = choice(arr);

            expect( arr ).toContain( a );
            expect( arr ).toContain( b );
            expect( a ).not.toEqual( b );
        });

    });

});

