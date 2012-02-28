define(['src/object/fillIn'], function (fillIn) {

    describe('object/fillIn', function () {

        it('should copy missing properties', function () {

            var a = {
                foo : 'bar',
                lorem : 123,
                b : {
                    c : 'd'
                }
            };

            var obj = fillIn({lorem : 'ipsum'}, a);

            expect( obj.foo ).toEqual( 'bar' );
            expect( obj.lorem ).toEqual( 'ipsum' );
            expect( obj.b ).toBe( a.b );

        });


        it('should allow copying properties from multiple objects', function () {

            var obj = fillIn({lorem : 'ipsum'},
                               {foo : 'bar', lorem : 'dolor'},
                               {num : 123});

            expect( obj.foo ).toEqual( 'bar' );
            expect( obj.lorem ).toEqual( 'ipsum' );
            expect( obj.num ).toBe( 123 );
        });

    });

});
