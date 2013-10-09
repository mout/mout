define(['mout/string/interpolate'], function (interpolate) {

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

        it('should treat null as empty string', function(){
            expect( interpolate('{{a}}', { a: null }) ).toBe('');
            expect( interpolate(null, {}) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( interpolate('{{a}}', { a: void 0 }) ).toBe('');
            expect( interpolate(null, {}) ).toBe('');
        });

        it('should treat false as string "false"', function() {
            expect( interpolate('{{a}} {{b}}', { a: false, b: true }) ).toBe( 'false true' );
        });

        it('should allow nested replacement objects', function(){
            var replacements = {
                a: { b: {c: 'lorem ipsum' } }
            };

            expect( interpolate('{{a.b.c}}', replacements) ).toEqual('lorem ipsum');
            expect( interpolate('{{a.b.d}}', replacements) ).toEqual('');
        });

        it('should allow nested complex key names', function(){
            var replacements = {
                '-#$&@_': 'foo bar'
            };

            expect( interpolate('{{-#$&@_}}', replacements) ).toEqual('foo bar');
        });

    });

});
