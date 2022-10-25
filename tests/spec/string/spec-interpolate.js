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


        it('should support deeply nested templates', function() {
            var replacements = {
                'level1': '{{level2}}',
                'level2': 'This is {{level3}}',
                'level3': 'somewhat deep'
            };
            expect( interpolate('{{level1}} nesting', replacements ) ).toBe( 'This is somewhat deep nesting' );
            expect( interpolate('{{0}} nesting', ['{{1}}', 'This is {{2}}', 'somewhat deep']) ).toBe( 'This is somewhat deep nesting' );
        });


        it('should support multiple deeply nested templates', function() {
            var replacements = {
                'level1' : '{{level2a}}. {{level2b}}',
                'level2a': 'This sentence is made of {{level3a}}',
                'level2b': 'And, this one has {{level3b}}',
                'level3a': 'three {{level4}}',
                'level3b': 'only two',
                'level4' : 'nested templates'
            };
            expect( interpolate('{{level1}} nested templates.', replacements ) ).toBe( 'This sentence is made of three nested templates. And, this one has only two nested templates.' );
        });


        it('should remove undefined tokens when template is deeply nested', function() {
            var replacements = {
                'level1': '{{level2}}',
                'level2': 'This is{{level3}}',
                'level4': ' Okay'
            };
            expect( interpolate('{{level1}} nesting.{{level4}}', replacements ) ).toBe( 'This is nesting. Okay' );
            expect( interpolate('{{1}} nesting.{{3}}', ['{{1}}', 'This is{{2}}', undefined, ' Okay'] ) ).toBe( 'This is nesting. Okay' );
        });

    });

});
