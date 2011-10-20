define(['src/math'], function(mathUtils){

    describe('math', function(){


        describe('clamp()', function(){

            var clamp = mathUtils.clamp;

            it('should return max if val bigger than max', function(){
                expect( clamp(10, 1, 10) ).toEqual(10);
                expect( clamp(11, 1, 10) ).toEqual(10);
                expect( clamp(12, 1, 10) ).toEqual(10);
                expect( clamp(9999, 1, 10) ).toEqual(10);
                expect( clamp(Number.MAX_VALUE, 1, 10) ).toEqual(10);

                expect( clamp(-2, -10, -2) ).toEqual(-2);
                expect( clamp(-1, -10, -2) ).toEqual(-2);
                expect( clamp(0, -10, -2) ).toEqual(-2);
                expect( clamp(10, -10, -2) ).toEqual(-2);
            });

            it('should return min if val smaller than min', function(){
                expect( clamp(1, 1, 10) ).toEqual(1);
                expect( clamp(-11, 1, 10) ).toEqual(1);
                expect( clamp(0, 1, 10) ).toEqual(1);
                expect( clamp(-9999, 1, 10) ).toEqual(1);
                expect( clamp(- Number.MAX_VALUE, 1, 10) ).toEqual(1);

                expect( clamp(- Number.MAX_VALUE, -10, -2) ).toEqual(-10);
                expect( clamp(-12, -10, -2) ).toEqual(-10);
                expect( clamp(-11, -10, -2) ).toEqual(-10);
                expect( clamp(-10, -10, -2) ).toEqual(-10);
            });

            it('should return val if inside range', function(){
                expect( clamp(6, 1, 10) ).toEqual(6);
                expect( clamp(55, 1, 100) ).toEqual(55);
                expect( clamp(0, -50, 50) ).toEqual(0);
                expect( clamp(-6, -10, -2) ).toEqual(-6);

                expect( clamp(10, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(10);
                expect( clamp(1234567890, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(1234567890);
            });

        });

        describe('loop()', function(){

            var loop = mathUtils.loop;

            it('should return `min` if `val` is bigger than `max`', function(){
                expect( loop(11, 0, 10) ).toEqual(0);
                expect( loop(9999999, 999, 9999) ).toEqual(999);
                expect( loop(-500, -1000, -750) ).toEqual(-1000);
            });

            it('should return `max` if `val` is smaller than `min`', function(){
                expect( loop(-1, 0, 10) ).toEqual(10);
                expect( loop(99, 999, 9999) ).toEqual(9999);
                expect( loop(-1005, -1000, -750) ).toEqual(-750);
            });

            it('should return val if inside range', function(){
                expect( loop(6, 1, 10) ).toEqual(6);
                expect( loop(55, 1, 100) ).toEqual(55);
                expect( loop(0, -50, 50) ).toEqual(0);
                expect( loop(-6, -10, -2) ).toEqual(-6);

                expect( loop(10, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(10);
                expect( loop(1234567890, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(1234567890);
            });

        });

        describe('inRange()', function(){

            var inRange = mathUtils.inRange;

            it('should return true if val is inside range', function(){
                expect( inRange(6, 1, 10) ).toEqual(true);
                expect( inRange(55, 1, 100) ).toEqual(true);
                expect( inRange(0, -50, 50) ).toEqual(true);
                expect( inRange(-6, -10, -2) ).toEqual(true);

                expect( inRange(10, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(true);
                expect( inRange(1234567890, - Number.MAX_VALUE, Number.MAX_VALUE) ).toEqual(true);
            });

            it('should return false if val is outside range', function(){
                expect( inRange(-6, 1, 10) ).toEqual(false);
                expect( inRange(555, 1, 100) ).toEqual(false);
                expect( inRange(51, -50, 50) ).toEqual(false);
                expect( inRange(-11, -10, -2) ).toEqual(false);
            });

            it('should tolerate threshold', function(){
                expect( inRange(12, 1, 10, 2) ).toEqual(true);
                expect( inRange(500, 1, 100, 400) ).toEqual(true);
                expect( inRange(12, 1, 10, 1) ).toEqual(false);
                expect( inRange(500, 1, 100, 300) ).toEqual(false);

                expect( inRange(10.5, 1, 10, 0.5) ).toEqual(true);
                expect( inRange(10.5, 1, 10, 0.25) ).toEqual(false);
            });

        });



        describe('isNear()', function(){

            var isNear = mathUtils.isNear;

            it('should return true if val is close to target +/- threshold', function(){
                expect( isNear(10.5, 10, 0.5) ).toEqual(true);
                expect( isNear(9.5, 10, 0.5) ).toEqual(true);
                expect( isNear(9.9, 10, 0.5) ).toEqual(true);
                expect( isNear(10.1, 10, 0.5) ).toEqual(true);
                expect( isNear(10, 10, 0.5) ).toEqual(true);
            });

            it('should return false if val is far from target +/- threshold', function(){
                expect( isNear(10.51, 10, 0.5) ).toEqual(false);
                expect( isNear(9.45, 10, 0.5) ).toEqual(false);
                expect( isNear(9.1, 10, 0.5) ).toEqual(false);
                expect( isNear(10.9, 10, 0.5) ).toEqual(false);
                expect( isNear(8, 10, 0.5) ).toEqual(false);
            });

        });


        describe('lerp()', function(){

            var lerp = mathUtils.lerp;

            it('interpolate values', function(){
                expect( lerp(0.5, 0, 10) ).toEqual(5);
                expect( lerp(0.75, 0, 100) ).toEqual(75);
                expect( lerp(0.66, 0, 1000) ).toEqual(660);
                expect( lerp(1, 0, 1000) ).toEqual(1000);
                expect( lerp(0, 0, 1000) ).toEqual(0);
            });

        });

        describe('lratio()', function(){

            var lratio = mathUtils.lratio;

            it('should normalize value inside range', function(){
                expect( lratio(50, 0, 100) ).toEqual(0.5);
                expect( lratio(200, 0, 500) ).toEqual(0.4);
                expect( lratio(200, 0, 1000) ).toEqual(0.2);
            });

            it('should calculate ratio even outside range', function(){
                expect( lratio(1500, 0, 1000) ).toEqual(1.5);
                expect( lratio(-1500, 0, 1000) ).toEqual(-1.5);
            });

        });

        describe('snap()', function(){

            var snap = mathUtils.snap;

            it('snap value to full steps', function(){
                expect( snap(12, 5) ).toEqual(10);
                expect( snap(17, 5) ).toEqual(15);
                expect( snap(122, 10) ).toEqual(120);
                expect( snap(129, 10) ).toEqual(120);
            });
        });

        describe('countSteps()', function(){

            var countSteps = mathUtils.countSteps;

            it('count number of full steps', function(){
                expect( countSteps(12, 5) ).toEqual(2);
                expect( countSteps(17, 5) ).toEqual(3);
                expect( countSteps(122, 10) ).toEqual(12);
                expect( countSteps(129, 10) ).toEqual(12);
            });

        });

        describe('map()', function(){

            var map = mathUtils.map;

            it('map a number from one scale to another', function(){
                expect( map(5, 0, 10, 10, 20) ).toEqual(15);
                expect( map(-50, -100, 0, 0, 100) ).toEqual(50);
                expect( map(0, -1, 1, 0, 100) ).toEqual(50);
            });

        });

        describe('random()', function(){

            var random = mathUtils.random;

            beforeEach(function(){
                this.addMatchers({
                    toSnap : function(min, max){
                        return this.actual === min || this.actual === max;
                    },
                    toDiffAny : function(vals){
                        var n = arguments.length;
                        while(n--){
                            if(this.actual !== arguments[n]) return true;
                        }
                        return false;
                    }
                });
            });

            it('returns a random number at each call', function(){
                var q = random();
                var w = random();
                var e = random();
                var r = random();
                var t = random();
                var y = random();
                expect( q ).not.toBeUndefined();
                expect( q ).not.toEqual( Number.Infinity );
                expect( q ).toDiffAny(w, e, r, t, y);
            });

            it('returns a random number inside range', function(){
                var q = random(0, 9999);
                var w = random(0, 9999);
                var e = random(0, 9999);
                var r = random(0, 9999);
                var t = random(0, 9999);
                var y = random(0, 9999);
                expect( q ).toBeLessThan(9999.01);
                expect( q ).toBeGreaterThan(-0.01);
                expect( w ).toBeLessThan(9999.01);
                expect( w ).toBeGreaterThan(-0.01);
                expect( e ).toBeLessThan(9999.01);
                expect( e ).toBeGreaterThan(-0.01);
                expect( r ).toBeLessThan(9999.01);
                expect( r ).toBeGreaterThan(-0.01);
                expect( t ).toBeLessThan(9999.01);
                expect( t ).toBeGreaterThan(-0.01);
                expect( y ).toBeLessThan(9999.01);
                expect( y ).toBeGreaterThan(-0.01);

                expect( q ).toDiffAny(w, e, r, t, y);
            });

            it('snap to min or max', function(){
                var q = random(0, 10, true);
                var w = random(0, 10, true);
                var e = random(0, 10, true);
                var r = random(0, 10, true);
                var t = random(0, 10, true);
                var y = random(0, 10, true);
                var u = random(0, 10, true);
                var i = random(0, 10, true);
                var o = random(0, 10, true);
                var p = random(0, 10, true);

                expect( q ).toSnap(0, 10);
                expect( w ).toSnap(0, 10);
                expect( e ).toSnap(0, 10);
                expect( r ).toSnap(0, 10);
                expect( t ).toSnap(0, 10);
                expect( y ).toSnap(0, 10);

                expect( q ).toDiffAny(w, e, r, t, y, u, i, o, p);
            });

        });
        describe('randomInt()', function(){

            var randomInt = mathUtils.randomInt;

            beforeEach(function(){
                this.addMatchers({
                    toSnap : function(min, max){
                        return this.actual === min || this.actual === max;
                    },
                    toDiffAny : function(vals){
                        var n = arguments.length;
                        while(n--){
                            if(this.actual !== arguments[n]) return true;
                        }
                        return false;
                    }
                });
            });

            it('returns a random number at each call', function(){
                var q = randomInt();
                var w = randomInt();
                var e = randomInt();
                var r = randomInt();
                var t = randomInt();
                var y = randomInt();
                expect( q ).not.toBeUndefined();
                expect( q ).not.toEqual( Number.Infinity );
                expect( q ).toDiffAny(w, e, r, t, y);
            });

            it('returns a random number inside range', function(){
                var q = randomInt(0, 9999);
                var w = randomInt(0, 9999);
                var e = randomInt(0, 9999);
                var r = randomInt(0, 9999);
                var t = randomInt(0, 9999);
                var y = randomInt(0, 9999);
                expect( q ).toBeLessThan(9999.01);
                expect( q ).toBeGreaterThan(-0.01);
                expect( w ).toBeLessThan(9999.01);
                expect( w ).toBeGreaterThan(-0.01);
                expect( e ).toBeLessThan(9999.01);
                expect( e ).toBeGreaterThan(-0.01);
                expect( r ).toBeLessThan(9999.01);
                expect( r ).toBeGreaterThan(-0.01);
                expect( t ).toBeLessThan(9999.01);
                expect( t ).toBeGreaterThan(-0.01);
                expect( y ).toBeLessThan(9999.01);
                expect( y ).toBeGreaterThan(-0.01);

                expect( q ).toDiffAny(w, e, r, t, y);
            });

            it('snap to min or max', function(){
                var q = randomInt(0, 10.5, true);
                var w = randomInt(0.5, 10, true);
                var e = randomInt(0, 10, true);
                var r = randomInt(0, 10, true);
                var t = randomInt(0, 10, true);
                var y = randomInt(0, 10, true);
                var u = randomInt(0, 10, true);
                var i = randomInt(0, 10, true);
                var o = randomInt(0, 10, true);
                var p = randomInt(0, 10, true);

                expect( q ).toSnap(0, 10);
                expect( w ).toSnap(0, 10);
                expect( e ).toSnap(0, 10);
                expect( r ).toSnap(0, 10);
                expect( t ).toSnap(0, 10);
                expect( y ).toSnap(0, 10);
                expect( u ).toSnap(0, 10);
                expect( i ).toSnap(0, 10);
                expect( o ).toSnap(0, 10);
                expect( p ).toSnap(0, 10);

                expect( q ).toDiffAny(w, e, r, t, y, u, i, o, p);
            });

        });


    //=====

    });

});
