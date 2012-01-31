define(
    [
        'src/object/unset'
    ],
    function (unset) {

        describe('object/unset()', function () {

            it('should delete property if existent', function () {
                var obj = {
                        foo : {
                            bar : 123
                        }
                    };
                expect( obj.foo.bar ).toBe( 123 );
                expect( unset(obj, 'foo.bar') ).toBe( true );
                var undef;
                expect( obj.foo.bar ).toBe( undef );
            });

            it('it should return true if property doesn\'t exist', function () {
                var obj = {};
                expect( unset(obj, 'dolor.amet') ).toBe( true );
            });

            it('shold work even if not nested path', function () {
                var obj = {
                    foo : 'bar'
                };
                expect( obj.foo ).toEqual( 'bar' );
                expect( unset(obj, 'foo') ).toBe(true);
                var undef;
                expect( obj.foo ).toBe( undef );
            });

        });

    }
);

