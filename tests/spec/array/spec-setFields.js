define(['mout/array/setFields'], function(setFields) {

    describe('array/setFields()', function() {

        var objList;

        beforeEach(function() {
            objList = [
                {
                    a: 1,
                    b: 2,
                    z: 'final'
                },
                'skip this',
                {
                    a: 2
                },
                {
                    a: 3,
                    c: 8
                },
                null,
                {},
                true
            ];
        });

        function check(list, fieldMap, expected) {
            var result = setFields(list, fieldMap);
            expect( result ).toBe( list );
            expect( result ).toEqual( expected );
        }

        it('should change specified field', function() {
            check(
                objList,
                {a: 'z'},
                [
                    {
                        a: 'z',
                        b: 2,
                        z: 'final'
                    },
                    'skip this',
                    {
                        a: 'z'
                    },
                    {
                        a: 'z',
                        c: 8
                    },
                    null,
                    {
                        a: 'z'
                    },
                    true
                ]
            );
        });

        it('should change and add specified fields', function() {
            check(
                objList,
                {
                    a: 100,
                    c: {
                        y: -1,
                        z: 'a'
                    },
                    x: 'zero'
                },
                [
                    {
                        a: 100,
                        b: 2,
                        c: {
                            y: -1,
                            z: 'a'
                        },
                        x: 'zero',
                        z: 'final'
                    },
                    'skip this',
                    {
                        a: 100,
                        c: {
                            y: -1,
                            z: 'a'
                        },
                        x: 'zero'
                    },
                    {
                        a: 100,
                        c: {
                            y: -1,
                            z: 'a'
                        },
                        x: 'zero'
                    },
                    null,
                    {
                        a: 100,
                        c: {
                            y: -1,
                            z: 'a'
                        },
                        x: 'zero'
                    },
                    true
                ]
            );
        });

        it('should return unmodified array', function() {
            var list = [1, 'value', false, null, -34];

            check(
                list,
                {a: '---'},
                list
            );

            check(
                objList,
                {},
                objList
            );
            check(
                objList,
                null,
                objList
            );
            check(
                objList,
                true,
                objList
            );
            check(
                objList,
                'field map',
                objList
            );
            check(
                objList,
                12345,
                objList
            );
        });

    });

});
