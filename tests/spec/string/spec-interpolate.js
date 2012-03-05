define(['src/string/interpolate'], function (interpolate) {

    describe('string/interpolate()', function () {

        it('should replace values', function () {

            expect( interpolate('{{a}} ipsum {{b}}', {
                a : 'lorem',
                b : 'dolor'
            }) ).toEqual( 'lorem ipsum dolor' );

            expect( interpolate('{{0}} ipsum {{1}}', ['lorem', 'dolor']) ).toEqual( 'lorem ipsum dolor' );

        });

        it('should remove undefined tokens', function () {

            expect( interpolate('{{a}}{{b}}{{c}}', {
                a : 'lorem',
                b : 'ipsum'
            }) ).toEqual( 'loremipsum' );

            expect( interpolate('{{0}}{{1}}{{2}}', ['lorem', 'ipsum']) ).toEqual( 'loremipsum' );

        });

        it('should allow a different syntax', function () {

            var syntax = /\$\{([^}]+)\}/g;

            expect( interpolate('${a} ipsum ${b}', {
                a : 'lorem',
                b : 'dolor'
            }, syntax) ).toEqual( 'lorem ipsum dolor' );

            expect( interpolate('${0} ipsum ${1}', ['lorem', 'dolor'], syntax) ).toEqual( 'lorem ipsum dolor' );

        });

    });

});
