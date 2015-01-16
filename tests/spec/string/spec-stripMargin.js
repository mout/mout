define(['mout/string/stripMargin'], function (stripMargin) {

    describe('string/stripMargin', function () {

        it('should strip leading characters up to | from a string', function () {
            expect( stripMargin('   |foo') ).toEqual( 'foo' );
            expect( stripMargin('foo\n    |bar\n    |baz') ).toEqual(
              'foo\nbar\nbaz');
        });

        it('should strip leading characters up to "marginChar" from a string', function(){
            expect( stripMargin('    #foo', '#') ).toBe('foo');
        });
    });

});
