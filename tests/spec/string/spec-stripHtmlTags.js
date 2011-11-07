define(['src/string/stripHtmlTags'], function (stripHtmlTags) {

    describe('string/stripHtmlTags()', function(){
        it('should remove html tags', function(){
            var str = '<div><div><span>lorem</span> ipsum <b>dolor</b></div><div> sit </div></div>amet';
            expect( stripHtmlTags( str ) ).toEqual( 'lorem ipsum dolor sit amet' );
        });
    });
});
