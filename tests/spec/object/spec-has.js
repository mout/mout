define(['src/object/has'], function (has) {

    describe('object/has()', function () {

        it('should check if object has property', function () {

            var obj = {
                a: 1,
                b: 'foo',
                lorem : {
                    ipsum : {
                        dolor : {
                            sit : 'amet'
                        }
                    }
                }
            };

            expect( has(obj, 'a') ).toBe( true );
            expect( has(obj, 'b') ).toBe( true );
            expect( has(obj, 'c') ).toBe( false );
            expect( has(obj, 'foo') ).toBe( false );
            expect( has(obj, 'lorem.ipsum.dolor') ).toBe( true );
            expect( has(obj, 'lorem.ipsum.dolor.sit') ).toBe( true );
            expect( has(obj, 'lorem.ipsum.nope.sit') ).toBe( false );
            expect( has(obj, 'hasOwnProperty') ).toBe( true );
            expect( has(obj, 'toString') ).toBe( true );
            expect( has(obj, 'toLocaleString') ).toBe( true );
            expect( has(obj, 'valueOf') ).toBe( true );
            expect( has(obj, 'isPrototypeOf') ).toBe( true );
            expect( has(obj, 'propertyIsEnumerable') ).toBe( true );
            expect( has(obj, 'constructor') ).toBe( true );

        });

        it('should work even if overwrite prototype properties, including hasOwnProperty', function () {

            var obj = {
                a: 1,
                b: 'foo',
                lorem : {
                    ipsum : {
                        dolor : {
                            sit : 'amet'
                        }
                    }
                },
                hasOwnProperty : 'yes',
                toString : 'lorem ipsum'
            };

            expect( has(obj, 'a') ).toBe( true );
            expect( has(obj, 'b') ).toBe( true );
            expect( has(obj, 'c') ).toBe( false );
            expect( has(obj, 'foo.bar.foo') ).toBe( false );
            expect( has(obj, 'lorem.ipsum') ).toBe( true );
            expect( has(obj, 'lorem.ipsum.nope.amet') ).toBe( false );
            expect( has(obj, 'lorem.ipsum.dolor.sit') ).toBe( true );
            expect( has(obj, 'hasOwnProperty') ).toBe( true );
            expect( has(obj, 'toString') ).toBe( true );
            expect( has(obj, 'toLocaleString') ).toBe( true );
            expect( has(obj, 'valueOf') ).toBe( true );
            expect( has(obj, 'isPrototypeOf') ).toBe( true );
            expect( has(obj, 'propertyIsEnumerable') ).toBe( true );
            expect( has(obj, 'constructor') ).toBe( true );

        });

    });


});
