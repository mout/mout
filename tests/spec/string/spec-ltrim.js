define(['mout/string/ltrim'], function (ltrim) {

    describe('string/ltrim()', function(){

        it('should remove whitespaces from begin of string', function(){
            var str = '   \t \t \t\t     lorem  ipsum    \t \t  \t\t  ';
            expect( ltrim(str) ).toEqual('lorem  ipsum    \t \t  \t\t  ');
        });

        it('should remove specified chars from begin of string', function(){
            var str = '-+-*test*-+-';
            var chars = ['-', '+', '*'];
            expect( ltrim(str, chars) ).toEqual('test*-+-');
        });

        it('should treat null as empty string', function(){
            expect( ltrim(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( ltrim(void 0) ).toBe('');
        });

    });

});
