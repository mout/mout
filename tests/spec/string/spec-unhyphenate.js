define(['src/string/unhyphenate'], function (unhyphenate) {

    describe('string/unhyphenate()', function(){

        it('should replace hyphens with spaces if between words', function(){
            var s1 = 'lorem-ipsum-dolor-sit-amet';
            var s2 = 'lorem-ipsum-dolor--sit-amet';
            var s3 = 'lorem-ipsum-dolor---sit-amet';
            var s4 = 'lorem-ipsum-dolor - sit-amet';

            expect( unhyphenate(s1) ).toEqual( 'lorem ipsum dolor sit amet' );
            expect( unhyphenate(s2) ).toEqual( 'lorem ipsum dolor--sit amet' );
            expect( unhyphenate(s3) ).toEqual( 'lorem ipsum dolor---sit amet' );
            expect( unhyphenate(s4) ).toEqual( 'lorem ipsum dolor - sit amet' );
        });

    });
});
