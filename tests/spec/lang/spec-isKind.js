define(['src/lang/isKind'], function (isKind) {

    describe('lang/isKind()', function(){

        it('should check kind of value', function () {

            expect( isKind([1, 'foo'], 'Array') ).toBe( true );
            expect( isKind(false, 'Boolean') ).toBe( true );
            expect( isKind(true, 'Boolean') ).toBe( true );
            expect( isKind(new Date(), 'Date') ).toBe( true );
            expect( isKind(function () {}, 'Function') ).toBe( true );
            expect( isKind(null, 'Null') ).toBe( true );
            expect( isKind(123, 'Number') ).toBe( true );
            expect( isKind({}, 'Object') ).toBe( true );
            expect( isKind(/\w+/, 'RegExp') ).toBe( true );
            expect( isKind('', 'String') ).toBe( true );
            expect( isKind(undefined, 'Undefined') ).toBe( true );

        });

    });

});
