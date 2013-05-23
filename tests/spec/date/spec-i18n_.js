define(['mout/date/i18n_'], function(i18n){

    describe('date/i18n_', function(){

        it('should contain localization info', function(){
            expect( i18n.am ).toBeDefined();
            expect( i18n.pm ).toBeDefined();
            expect( i18n.months.length ).toBe(12);
            expect( i18n.months_abbr.length ).toBe(12);
            expect( i18n.days.length ).toBe(7);
            expect( i18n.days_abbr.length ).toBe(7);
        });

        it('should allow overriding the global data', function () {
            var am = i18n.am;
            var old = i18n;
            i18n.set({
                am: 'FOO'
            });
            expect( i18n.am ).toEqual('FOO');
            expect( i18n ).toBe( old );
            i18n.set({
                am: am
            });
            expect( i18n.am ).toEqual('AM');
        });

    });

});
