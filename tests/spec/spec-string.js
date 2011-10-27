define(['src/string'], function(stringUtils){

    describe('string', function(){

    //------

        describe('trim()', function(){
            var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';

            it('should remove whitespaces from begin and end of string', function(){
                expect( stringUtils.trim(str) ).toEqual('lorem  ipsum');
            });
        });

        describe('ltrim()', function(){
            var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';

            it('should remove whitespaces from begin of string', function(){
                expect( stringUtils.ltrim(str) ).toEqual('lorem  ipsum    \t \t  \t\t  ');
            });
        });

        describe('rtrim()', function(){
            var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';

            it('should remove whitespaces from end of string', function(){
                expect( stringUtils.rtrim(str) ).toEqual('   \t \t \t\t     lorem  ipsum');
            });
        });


        describe('truncate()', function(){
            var truncate = stringUtils.truncate;
            var str = 'lorem ipsum dolor sit amet';

            it('should limit number of chars', function(){
                var r1 = truncate(str, 10);
                expect( r1.length ).toBeLessThan( 11 );
                expect( r1 ).toEqual( 'lorem...' );

                var r2 = truncate(str, 14);
                expect( r2.length ).toBeLessThan( 15 );
                expect( r2 ).toEqual( 'lorem ipsum...' );
            });

            it('should append string param', function(){
                var r1 = truncate(str, 10, '--');
                expect( r1.length ).toBeLessThan( 11 );
                expect( r1 ).toEqual( 'lorem--' );

                var r2 = truncate(str, 14, '=');
                expect( r2.length ).toBeLessThan( 15 );
                expect( r2 ).toEqual( 'lorem ipsum=' );
            });

        });


        describe('hyphenate()', function(){
            var hyphenate = stringUtils.hyphenate;

            it('should split camelCase text', function(){
                var str = 'loremIpsum';
                expect( hyphenate(str) ).toEqual('lorem-ipsum');
            });

            it('should replace spaces with hyphens', function(){
                var str = '  lorem ipsum    dolor';
                expect( hyphenate(str) ).toEqual('lorem-ipsum-dolor');
            });

            it('should remove non-word chars', function(){
                var str = ' %# lorem ipsum  ? $  dolor';
                expect( hyphenate(str) ).toEqual('lorem-ipsum-dolor');
            });

            it('should replace accents', function(){
                var str = 'spéçïãl chârs';
                expect( hyphenate(str) ).toEqual('special-chars');
            });

            it('should convert to lowercase', function(){
                var str = 'LOREM IPSUM';
                expect( hyphenate(str) ).toEqual('lorem-ipsum');
            });

            it('should do it all at once', function(){
                var str = '  %$ & loremIpsum @ dolor spéçïãl  ! chârs  )( )  ';
                expect( hyphenate(str) ).toEqual('lorem-ipsum-dolor-special-chars');
            });

        });


        describe('unHyphenate()', function(){

            var unHyphenate = stringUtils.unHyphenate;

            it('should replace hyphens with spaces if between words', function(){
                var s1 = 'lorem-ipsum-dolor-sit-amet';
                var s2 = 'lorem-ipsum-dolor--sit-amet';
                var s3 = 'lorem-ipsum-dolor---sit-amet';
                var s4 = 'lorem-ipsum-dolor - sit-amet';

                expect( unHyphenate(s1) ).toEqual( 'lorem ipsum dolor sit amet' );
                expect( unHyphenate(s2) ).toEqual( 'lorem ipsum dolor--sit amet' );
                expect( unHyphenate(s3) ).toEqual( 'lorem ipsum dolor---sit amet' );
                expect( unHyphenate(s4) ).toEqual( 'lorem ipsum dolor - sit amet' );
            });

        });


        describe('toSlug()', function(){
            var toSlug = stringUtils.toSlug;

            it('shouldn\'t split camelCase text', function(){
                var str = 'loremIpsum';
                expect( toSlug(str) ).toEqual('loremipsum');
            });

            it('should replace spaces with hyphens', function(){
                var str = '  lorem ipsum    dolor';
                expect( toSlug(str) ).toEqual('lorem-ipsum-dolor');
            });

            it('should remove non-word chars', function(){
                var str = ' %# lorem ipsum  ? $  dolor';
                expect( toSlug(str) ).toEqual('lorem-ipsum-dolor');
            });

            it('should replace accents', function(){
                var str = 'spéçïãl chârs';
                expect( toSlug(str) ).toEqual('special-chars');
            });

            it('should convert to lowercase', function(){
                var str = 'LOREM IPSUM';
                expect( toSlug(str) ).toEqual('lorem-ipsum');
            });

            it('should do it all at once', function(){
                var str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
                expect( toSlug(str) ).toEqual('lorem-ipsum-dolor-special-chars');
            });

        });


        describe('camelCase()', function(){

            var camelCase = stringUtils.camelCase;

            it('should convert hyphenated text to camelCase', function(){
                var str = 'lorem-ipsum-dolor';
                expect( camelCase(str) ).toEqual('loremIpsumDolor');
            });

            it('should convert spaces to camelCase', function(){
                var str = '  lorem ipsum  dolor  ';
                expect( camelCase(str) ).toEqual('loremIpsumDolor');
            });

            it('should remove non word', function(){
                var str = ' #$  lorem ipsum ^ &:  dolor ++ ';
                expect( camelCase(str) ).toEqual('loremIpsumDolor');
            });

            it('should replace accents', function(){
                var str = 'spéçïãl chârs';
                expect( camelCase(str) ).toEqual('specialChars');
            });

            it('should do it all at once', function(){
                var str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
                expect( camelCase(str) ).toEqual('loremIpsumDolorSpecialChars');
            });

        });

        describe('unCamelCase()', function(){

            var unCamelCase = stringUtils.unCamelCase;

            it('should add space between camelCase text', function(){
               expect( unCamelCase('loremIpsumDolor') ).toEqual('lorem ipsum dolor');
               expect( unCamelCase('lorem IpsumDolor') ).toEqual('lorem ipsum dolor');
            });

        });

        describe('pascalCase()', function(){

            var pascalCase = stringUtils.pascalCase;

            it('should convert hyphenated text to camelCase', function(){
                var str = 'lorem-ipsum-dolor';
                expect( pascalCase(str) ).toEqual('LoremIpsumDolor');
            });

            it('should convert spaces to camelCase', function(){
                var str = '  lorem ipsum  dolor  ';
                expect( pascalCase(str) ).toEqual('LoremIpsumDolor');
            });

            it('should remove non word', function(){
                var str = ' #$  lorem ipsum ^ &:  dolor ++ ';
                expect( pascalCase(str) ).toEqual('LoremIpsumDolor');
            });

            it('should replace accents', function(){
                var str = 'spéçïãl chârs';
                expect( pascalCase(str) ).toEqual('SpecialChars');
            });

            it('should do it all at once', function(){
                var str = '  %$ & lorem Ipsum @ dolor spéçïãl  ! chârs  )( )  ';
                expect( pascalCase(str) ).toEqual('LoremIpsumDolorSpecialChars');
            });

        });

        describe('properCase()', function(){
            var properCase = stringUtils.properCase;
            it('should uppercase first char of each word and lowercase others', function(){
                expect( properCase('lorem iPSum dolor') ).toEqual('Lorem Ipsum Dolor');
            });
        });

        describe('sentenceCase()', function(){
            var sentenceCase = stringUtils.sentenceCase;
            it('should uppercase first char of each sentence and lowercase others', function(){
                expect( sentenceCase('lorem Ipsum doLOr. sit amet dolor.') ).toEqual('Lorem ipsum dolor. Sit amet dolor.');
            });
        });

        describe('makePath()', function(){

            var makePath = stringUtils.makePath;

            it('should convert to path', function(){
                expect( makePath('lorem', 'ipsum', 'dolor') ).toEqual('lorem/ipsum/dolor');
            });

            it('should ignore empty/null values', function(){
                expect( makePath('lorem', null, 'ipsum', '', null, 'dolor') ).toEqual('lorem/ipsum/dolor');
            });
        });

        describe('replaceAccents()', function(){

            it('should replace all Basic Latin and Latin-1 accented chars with regular ones', function(){
                var accents = 'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ';
                var regular = 'aAaAaAaAaAaAcCeEeEeEeEiIiIiIiInNoOoOoOOoOoODpuUuUuUuUyYy';
                expect( stringUtils.replaceAccents(accents) ).toEqual( regular );
            });

        });

        describe('removeNonWord()', function(){

            it('should remove non word chars', function(){
                var str = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
                expect( stringUtils.removeNonWord(str) ).toEqual('lorem - ipsum');
            });

        });

        describe('removeNonASCII()', function(){
            it('should remove non-printable chars', function(){
                var accents = 'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ';
                var printable = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
                var str = accents + printable;

                expect( stringUtils.removeNonASCII( str ) ).toEqual( printable );
            });
        });

        describe('stripHtmlTags()', function(){
            it('should remove html tags', function(){
                var str = '<div><div><span>lorem</span> ipsum <b>dolor</b></div><div> sit </div></div>amet';
                expect( stringUtils.stripHtmlTags( str ) ).toEqual( 'lorem ipsum dolor sit amet' );
            });
        });


    //------

    });

});
