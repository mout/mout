import isDate from 'mout/lang/isDate';

    describe('lang/isDate()', function () {

        it('should detect if value is a Date', function () {

            expect( isDate(new Date()) ).toBe( true );

            expect( isDate('') ).toBe( false );
            expect( isDate(123) ).toBe( false );
            expect( isDate(null) ).toBe( false );
            expect( isDate({}) ).toBe( false );
            expect( isDate([]) ).toBe( false );

        });

    });


