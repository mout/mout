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

            it('should accept arrays', function () {
                var foo = {
                    bar : {
                        spam : 'eggs'
                    }
                };

                expect(get(foo, ['bar', 'spam'])).toBe('eggs');
            });

            it('should return the original object when given an empty query', function () {
                var anObject = {value: true};

                expect(get(anObject, [])).toBe(anObject);
            });

            it('should return non-truthy results for the last value.', function () {
                var anObject = {value: false};

                expect(get(anObject, "value")).toBe(false);
            });

        });
    }
);

