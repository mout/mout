define(['mout/object/deepFillIn'], function(deepFillIn){

    describe('object/deepFillIn', function(){

        it('should copy missing properties', function () {
            var a = {
                foo : 'bar',
                lorem : 123,
                b : {
                    c : 'd'
                }
            };
            var obj = deepFillIn({lorem : 'ipsum'}, a);
            expect( obj.foo ).toEqual( 'bar' );
            expect( obj.lorem ).toEqual( 'ipsum' );
            expect( obj.b ).toBe( a.b );
        });


        it('should copy nested properties', function () {
            var a = {
                foo : 'bar',
                lorem : 123,
                b : {
                    c : 'd',
                    dolor : {
                        '3' : 789
                    }
                }
            };
            var b = {
                e : 'f',
                dolor : {
                    '1' : 456
                }
            };
            var obj = deepFillIn({
                lorem : 'ipsum',
                b : b
            }, a);
            expect( obj.foo ).toEqual( 'bar' );
            expect( obj.lorem ).toEqual( 'ipsum' );
            expect( obj.b ).toBe( b );
            expect( obj.b.c ).toBe( 'd' );
            expect( obj.b.e ).toBe( 'f' );
            expect( obj.b.dolor ).toBe( b.dolor );
            expect( obj.b.dolor[1] ).toBe( 456 );
            expect( obj.b.dolor[2] ).toBeUndefined();
            expect( obj.b.dolor[3] ).toBe( 789 );
        });


        it('should allow multiple default objects', function () {

            var a = {lorem : 'ipsum', dolor : { sit : 'amet' }};
            var b = {foo : 'bar', lorem : 'dolor', dolor : { sit : 456, it : 78 }};
            var c = {num : 123, foo : null, dolor : {maecennas : 'ullamcor'}};

            var obj = deepFillIn(a, b, c);

            expect( obj ).toEqual( {
                lorem : 'ipsum',
                dolor : {
                    sit : 'amet',
                    it : 78,
                    maecennas : 'ullamcor'
                },
                foo : 'bar',
                num : 123
            } );

        });

        it('should copy values that are not plain objects by reference', function() {
            function Custom() { }
            var defaults = {
                custom: new Custom(),
                items: [1, 2, 3]
            };

            var target = {};
            deepFillIn(target, defaults);

            expect( target.custom ).toBe(defaults.custom);
            expect( target.items ).toBe(defaults.items);
        });

    });

});
