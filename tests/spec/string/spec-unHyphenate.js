define(['src/string/unHyphenate'], function (unHyphenate) {

    describe('string/unHyphenate()', function(){

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
});
