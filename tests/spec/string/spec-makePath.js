define(['src/string/makePath'], function (makePath) {

    describe('string/makePath()', function(){

        it('should convert to path', function(){
            expect( makePath('lorem', 'ipsum', 'dolor') ).toEqual('lorem/ipsum/dolor');
        });

        it('should ignore empty/null values', function(){
            expect( makePath('lorem', null, 'ipsum', '', null, 'dolor') ).toEqual('lorem/ipsum/dolor');
        });
    });
});
