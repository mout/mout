define(['mout/string/stripHtmlTags'], function (stripHtmlTags) {

    describe('string/stripHtmlTags()', function(){

        it('should remove html tags', function(){
            var str = '<div><div><span>lorem</span> ipsum <b>dolor</b></div><div> sit </div></div>amet';
            expect( stripHtmlTags( str ) ).toEqual( 'lorem ipsum dolor sit amet' );
        });

        it('should treat null as empty string', function(){
            expect( stripHtmlTags(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( stripHtmlTags(void 0) ).toBe('');
        });

    });

});
