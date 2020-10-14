// file: test_030209.js
// description: 测试List的相关迭代器方法.

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.9 遍历列表', function(){

    describe('front测试', function(){
        
        it('front的normal测试', function(done){
            var list = new collection.List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), 1);
            done();
        });

        it('front测试(undefined列表)', function(done){
            var list = new collection.List();
            list.append(undefined);
            list.append(undefined);
            list.append(undefined);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), undefined);
            done();
        });

        it('front测试(boolean列表)', function(done){
            var list = new collection.List();
            list.append(false);
            list.append(true);
            list.append(true);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), false);
            done();
        });

        it('front测试(number列表)', function(done){
            var list = new collection.List();
            list.append(3.5);
            list.append(4);
            list.append(6.8);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), 3.5);
            done();
        });

        it('front测试(string列表)', function(done){
            var list = new collection.List();
            list.append('jedi');
            list.append('becky');
            list.append('cici');
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), 'jedi');
            done();
        });

        it('front测试(BigInt列表)', function(done){
            var list = new collection.List();
            var bigint1 = BigInt(Number.MAX_SAFE_INTEGER);
            var bigint2 = BigInt(Number.MAX_SAFE_INTEGER);
            var bigint3 = BigInt(Number.MAX_SAFE_INTEGER);
            list.append(bigint1);
            list.append(bigint2);
            list.append(bigint3);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), bigint1);
            done();
        });

        it('front测试(Symbol列表)', function(done){
            var list = new collection.List();
            var symbol1 = Symbol('redhat');
            var symbol2 = Symbol('windows');
            var symbol3 = Symbol('ubuntu');
            list.append(symbol1);
            list.append(symbol2);
            list.append(symbol3);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), symbol1);
            done();
        });

        it('front测试(object列表)', function(done){
            var list = new collection.List();
            var o1 = {name:'jedi'};
            var o2 = {name:'becky'};
            var o3 = {name:'cici'};
            list.append(o1);
            list.append(o2);
            list.append(o3);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.deepStrictEqual(list.getElement(), o1);
            done();
        });

        it('front测试(array列表)', function(done){
            var list = new collection.List();
            var arr1 = [], arr2 = [[]], arr3 = [[[]]];
            list.append(arr1);
            list.append(arr2);
            list.append(arr3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.deepStrictEqual(list.getElement(), arr1);
            done();
        });

        it('front测试(map列表)', function(done){
            var list = new collection.List();
            var map1 = new Map(), map2 = new Map(), map3 = new Map();
            list.append(map1); list.append(map2); list.append(map3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.deepStrictEqual(list.getElement(), map1);
            done();
        });

        it('front测试(set列表)', function(done){
            var list = new collection.List();
            var set1 = new Set(), set2 = new Set(), set3 = new Set();
            list.append(set1); list.append(set2); list.append(set3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), set1);
            done();
        });

        it('front测试(WeakMap列表)', function(done){
            var list = new collection.List();
            var wm1 = new WeakMap(), wm2 = new WeakMap(), wm3 = new WeakMap();
            list.append(wm1); list.append(wm2); list.append(wm3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), wm1);
            done();
        });

        it('front测试(WeakSet列表)', function(done){
            var list = new collection.List();
            var ws1 = new WeakSet(), ws2 = new WeakSet(), ws3 = new WeakSet();
            list.append(ws1); list.append(ws2); list.append(ws3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), ws1);
            done();
        });

        it('front测试(Date列表)', function(done){
            var list = new collection.List();
            var date1 = new Date('1978-6-3');
            var date2 = new Date('1979-6-3');
            var date3 = new Date('1980-6-3');
            list.append(date1); list.append(date2); list.append(date3);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), date1);
            done();
        });

        it('front测试(null列表)', function(done){
            var list = new collection.List();
            list.append(null); list.append(null); list.append(null);
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), null);
            done();
        });

    });

    describe('next测试', function(){

        it('next测试(normal列表)', function(done){
            var list = new collection.List();
            list.append({});
            list.append(1);
            list.append(23);
            list.next();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 1);
            assert.strictEqual(list.getElement(), 1);
            done();
        });

        it('next测试(undefined列表)', function(done){
            var list = new collection.List();
            list.append(undefined);
            list.append(undefined);
            list.append(undefined);
            list.next();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 1);
            assert.strictEqual(list.getElement(), undefined);
            done();
        });

        it('next测试(boolean列表)', function(done){
            var list = new collection.List();
            list.append(true);
            list.append(false);
            list.append(true);
            list.next();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 1);
            assert.strictEqual(list.getElement(), false);
            done();
        });

        it('next测试(number列表)', function(done){
            var list = new collection.List();
            list.append(1.1);
            list.append(2.2);
            list.append(3.3);
            list.next();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 1);
            assert.strictEqual(list.getElement(), 2.2);
            done();
        });

        it('next测试(string列表)', function(done){
            var list = new collection.List();
            list.append('jedi');
            list.append('becky');
            list.append('cici');
            list.next();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 1);
            assert.strictEqual(list.getElement(), 'becky');
            done();
        });

        it('next测试(BigInt列表)', function(done){
            var list = new collection.List();
            list.append(BigInt.MAX_SAFE_INTEGER);
            list.append(BigInt.MAX_SAFE_INTEGER);
            list.append(BigInt.MAX_SAFE_INTEGER);
            list.next();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 1);
            assert.strictEqual(list.getElement(), BigInt.MAX_SAFE_INTEGER);
            done();
        });

    });

});