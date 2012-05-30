define(['src/string/makePath'], function (makePath) {

    describe('string/makePath()', function(){

        it('should convert to path', function(){
            expect( makePath('lorem', 'ipsum', 'dolor') ).toEqual('lorem/ipsum/dolor');
        });

        it('should ignore empty/null values', function(){
            expect( makePath('lorem', null, 'ipsum', '', null, 'dolor') ).toEqual('lorem/ipsum/dolor');
        });

        it('should ignore empty/null values at begin', function () {
            expect( makePath('', 'foo') ).toEqual( 'foo' );
            expect( makePath(null, 'bar') ).toEqual( 'bar' );
            expect( makePath('', null, 'dolor', 'amet') ).toEqual( 'dolor/amet' );
        });

        it('should keep trailing slash if it exists', function () {
            expect( makePath('dolor', 'amet/') ).toEqual( 'dolor/amet/' );
            expect( makePath('dolor', 'ipsum', '/') ).toEqual( 'dolor/ipsum/' );
        });

        it('should keep leading slash if it exists', function () {
            expect( makePath('/dolor', 'amet/') ).toEqual( '/dolor/amet/' );
            expect( makePath('/', 'dolor', 'ipsum', '/') ).toEqual( '/dolor/ipsum/' );
        });

        it('should remove duplicate slashes', function () {
            expect( makePath('dolor/', '/',  '/ipsum', '//') ).toEqual( 'dolor/ipsum/' );
        });

    });
});
