define(['mout/random/randString', './helper-mockRandom'], function (randString, mockRandom) {

    describe('random/randString', function(){

        beforeEach(function(){
            mockRandom.start();
        });

        afterEach(function(){
            mockRandom.end();
        });

        it('should return a string.', function() {
            expect(typeof randString()).toBe('string');
        });

        it('should default to 8 characters.', function() {
            expect(randString().length).toBe(8);
        });

        it('should allow for user specified lengths.', function() {
            expect(randString(10).length).toBe(10);
        });

        it('should default on invalid lengths.', function() {
            expect(randString(0).length).toBe(8);
            expect(randString("").length).toBe(8);
            expect(randString(false).length).toBe(8);
            expect(randString(-1).length).toBe(8);
        });

        it('should return a base62 subset of characters by default.', function() {
            expect(randString()).toMatch(/[a-zA-Z0-9]*/);
        });

        it('should use default dictionary if an invalid one is provided.', function() {
            expect(randString(4, null)).toMatch(/[a-zA-Z0-9]{4}/);
            expect(randString(4, '')).toMatch(/[a-zA-Z0-9]{4}/);
        });

        it('should use a provided dictionary.', function() {
            expect(randString(4, 'ab')).toMatch(/[ab]{4}/);
            expect(randString(4, 'Random')).toMatch(/[Random]{4}/);
        });

        it('should generate a "random" string.', function() {
            expect(randString()).not.toBe(randString());
            expect(randString(4)).not.toBe(randString(4));
            expect(randString(16, 'ab')).not.toBe(randString(16, 'ab'));
        });
    });
});
