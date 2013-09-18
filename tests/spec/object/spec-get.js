define(
    [
        'mout/object/get'
    ],
    function (get) {

        describe('object/get()', function () {

            it('should get nested property', function () {
                var foo = {
                    bar : {
                        lorem : {
                            ipsum : 'dolor'
                        }
                    }
                };
                expect( get(foo, 'bar.lorem.ipsum') ).toBe( 'dolor' );
            });

            it('should return undefined if non existent', function () {
                var foo = {
                    bar : {
                        lorem : 'ipsum'
                    }
                };
                var undef;
                expect( get(foo, 'bar.dolor') ).toBe( undef );
            });

            it('should return undefined when encountering null', function() {
                var foo = {
                    bar: null
                };

                var undef;
                expect( get(foo, 'foo.bar.baz') ).toBe(undef);
            });

        });

    }
);

