define(['src/object/merge'], function (merge) {

    describe('object/merge()', function () {

        it('should merge object properties without affecting any object', function () {

            var obj1 = {a: 0, b: 1};
            var obj2 = {c: 2, d: 3};
            var obj3 = {a: 4, d: 5};

            var out = {a:4, b:1, c:2, d:5};

            expect( merge(obj1, obj2, obj3) ).toEqual( out );
            expect( out ).not.toEqual( obj1 );
            expect( out ).not.toEqual( obj2 );
            expect( out ).not.toEqual( obj3 );

        });


        it('should do a deep merge', function () {
            var obj1 = {a: {b: 1, c: 1, d: {e: 1, f: 1}}};
            var obj2 = {a: {b: 2, d : {f : 'yeah'} }};

            expect( merge(obj1, obj2) ).toEqual( {a: {b : 2, c : 1, d : {e : 1, f : 'yeah'}}}  );
        });

        it('should clone objects during merge', function () {
            var obj1 = {a: {b :1}};
            var obj2 = {a: {c :2}};

            var out = merge(obj1, obj2);
            expect( out ).toEqual( {a:{b:1, c:2}} );
            expect( out.a ).not.toBe( obj1.a );
            expect( out.a ).not.toBe( obj2.a );
        });

        it('should deep clone arrays during merge', function () {
            var obj1 = {a: [1, 2, [3, 4]]};
            var obj2 = {b : [5, 6]};

            var out = merge(obj1, obj2);
            expect( out.a ).toEqual( [1, 2, [3, 4]] );
            expect( out.a ).not.toBe( obj1.a );

            expect( out.a[2] ).toEqual( [3, 4] );
            expect( out.a[2] ).not.toBe( obj1.a[2] );

            expect( out.b ).toEqual( obj2.b );
            expect( out.b ).not.toBe( obj2.b );
        });

    });

});
