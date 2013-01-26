define(['mout/string/replace'], function (replace) {

    describe('string/replace()', function(){

        it('should return subject if subject is not an string', function(){
            var subject = 27;
            var search = '7';
            var replacement = '9';
            var expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

            subject = {a: 1};
            search = 'a';
            replacement = 'b';
            expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

            subject = ['a', 'b', 'c'];
            search = 'a';
            replacement = 'b';
            expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

            subject = null;
            search = null;
            replacement = false;
            expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

        });

        it('should return subject if search is not an array or string', function(){
            var subject = 'hello world';
            var search = Infinity;
            var replacement = '9';
            var expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

            subject = 'hello world';
            search = undefined;
            replacement = 'b';
            expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

            subject = 'hello world';
            search = {};
            replacement = 'b';
            expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

            subject = 'hello world';
            search = null;
            replacement = false;
            expected = subject;
            expect( replace(subject, search, replacement) ).toEqual( expected );

        });

        it('should replace characters', function(){
            var subject = 'hello world';
            var search = 'eo';
            var replacement = '';
            var expected = 'hll wrld';
            expect( replace(subject, search, replacement) ).toEqual( expected );

            subject = 'hellO world';
            search = 'eo';
            replacement = '__';
            expected = 'h__llO w__rld';
            expect( replace(subject, search, replacement) ).toEqual( expected );

        });

        it('should replace characters from input array to replacement', function(){
            var subject = 'hello world';
            var search = ['ll', 'r'];
            var replacement = '@';
            var expected = 'he@o wo@ld';
            expect( replace(subject, search, replacement) ).toEqual( expected );

        });

        it('should replace characters from input array to output array', function(){
            var subject = 'hello world';
            var search = ['l', 'r'];
            var replacement = ['$', '9'];
            var expected = 'he$$o wo9$d';
            expect( replace(subject, search, replacement) ).toEqual( expected );

        });

        it("should replace characters from input array to '' when there is no correspondent in replacement array", function(){
            var subject = 'hello world';
            var search = ['l', 'r'];
            var replacement = ['$'];
            var expected = 'he$$o wo$d';
            expect( replace(subject, search, replacement) ).toEqual( expected );

        });

        it('should perform case insensitive replace', function(){
            var subject = 'hello world';
            var search = 'O';
            var replacement = '###';
            var expected = 'hell### w###rld';
            expect( replace(subject, search, replacement, true) ).toEqual( expected );

        });

        it('default behaviour should be case sensitive', function(){
            var subject = 'helLo wOrld';
            var search = 'LO';
            var replacement = '###';
            var expected = 'hel###o w###rld';
            expect( replace(subject, search, replacement) ).toEqual( expected );
            expect( replace(subject, search, replacement, false) ).toEqual( expected );

        });

    });
});
