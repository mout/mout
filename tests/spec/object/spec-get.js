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

            it('should get nested property when encountering non-primitive', function () {
                var foo = {
                    bar : {
                        lorem : function(){}
                    }
                };

                foo.bar.lorem.ipsum = 'dolor'

                expect( get(foo, 'bar.lorem.ipsum') ).toBe( 'dolor' );
            });

            it('should get nested property when encountering primitive', function () {
                var foo = {
                    bar : {
                        lorem : 'ipsum'
                    }
                };

                expect( get(foo, 'bar.lorem.toString') ).toBe( foo.bar.lorem.toString );
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

            it('should return undefined for undefined input objects', function() {
              var foo = undefined;

              var undef;
              expect( get(foo, 'bar.baz') ).toBe(undef);
            });

            it('should return undefined for null input objects', function() {
              var foo = null;

              var undef;
              expect( get(foo, 'bar.baz') ).toBe(undef);
            });
        });

    }
);
