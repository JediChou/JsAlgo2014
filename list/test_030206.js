// file: test_030206.js
// description: 检测插入函数

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.6 insert：向列表中插入一个元素', function(){

    it('向空List插入元素', function(done){
        var list = new collection.List();
        var action = list.insert(1, '');
        assert.ok(!action);
        assert.strictEqual(list.length(), 0);
        assert.strictEqual(list.listSize, 0);
        done();
    });

    it('向List中插入undefined值', function(done){
        var list = new collection.List();
        list.append(undefined);
        var action = list.insert(undefined, undefined);
        assert.strictEqual(list.length(), 2);
        assert.ok(action);
        assert.strictEqual(list.dataStore[1], undefined);
        done();
    });

    it('向List中插入boolean值', function(done){
        var list = new collection.List();
        list.append(true);
        var action = list.insert(false, true);
        assert.strictEqual(list.length(), 2);
        assert.ok(action);
        assert.strictEqual(list.dataStore[0], true);
        assert.strictEqual(list.dataStore[1], false);
        done();
    });

    it('向List中插入Number值', function(done){
        var list = new collection.List();
        list.append(2.2);
        var action = list.insert(3.3, 2.2);
        assert.strictEqual(list.length(), 2);
        assert.ok(action);
        assert.strictEqual(list.dataStore[0], 2.2);
        assert.strictEqual(list.dataStore[1], 3.3);
        done();
    });



    it('向List中插入String值', function(done){
        var list = new collection.List();
        list.append("hello");
        var action = list.insert("world", "hello");
        assert.strictEqual(list.length(), 2);
        assert.ok(action);
        assert.strictEqual(list.dataStore[0], "hello");
        assert.strictEqual(list.dataStore[1], "world");
        done();
    });

    it('向List中插入BigInt', function(done){
        var list = new collection.List();
        list.append('');
        var theBiggestInt = BigInt(Number.MAX_SAFE_INTEGER) ;
        var action = list.insert(theBiggestInt, "");
        assert.strictEqual(list.length(), 2);
        assert.ok(action);
        assert.strictEqual(list.dataStore[0], "");
        assert.strictEqual(list.dataStore[1], theBiggestInt);
        done();
    });

    it('向List中插入Symbol值', function(done){
        var list = new collection.List();
        var sym1 = Symbol("first");
        var sym2 = Symbol("second");
        list.append(sym1);
        var action = list.insert(sym2, sym1);
        assert.strictEqual(list.length(), 2);
        assert.ok(action);
        assert.strictEqual(list.dataStore[0], sym1);
        assert.strictEqual(list.dataStore[1], sym2);
        done();
    });

    it('向List中插入object', function(done){
        var list = new collection.List();
        var p1 = {name:"jedi", age:42};
        var p2 = {name:"becky", age:37};
        var p3 = {name:"cici", age:8};
        list.append(p1);
        var action1 = list.insert(p3, p1);
        var action2 = list.insert(p2, p1);
        assert.strictEqual(list.length(), 3);
        assert.ok(action1 && action2);
        assert.strictEqual(list.dataStore[0], p1);
        assert.strictEqual(list.dataStore[1], p2);
        assert.strictEqual(list.dataStore[2], p3);
        done();
    });

    it('向List插入Array', function(done){
        var list = new collection.List();
        var arr1 = [1], arr2 = [2], arr3 = [3];
        list.append(arr1);
        var action3 = list.insert(arr3, arr1);
        var action2 = list.insert(arr2, arr1);
        assert.strictEqual(list.length(), 3);
        assert.ok(action3 && action2);
        assert.deepStrictEqual(list.dataStore[0], arr1);
        assert.deepStrictEqual(list.dataStore[1], arr2);
        assert.deepStrictEqual(list.dataStore[2], arr3);
        done();
    });

    it('向List插入Map', function(done){
        var list = new collection.List();
        var map1 = new Map(), map2 = new Map(), map3 = new Map();
        list.append(map1);
        var action3 = list.insert(map3, map1);
        var action2 = list.insert(map2, map1);
        assert.strictEqual(list.length(), 3);
        assert.ok(action3 && action2);
        assert.deepStrictEqual(list.dataStore[0], map1);
        assert.deepStrictEqual(list.dataStore[1], map2);
        assert.deepStrictEqual(list.dataStore[2], map3);
        done();
    });

    it('向List此插入set', function(done){
        var list = new collection.List();
        var set1 = new Set(), set2 = new Set(), set3 = new Set();
        list.append(set1);
        var action3 = list.insert(set3, set1);
        var action2 = list.insert(set2, set1);
        assert.strictEqual(list.length(), 3);
        assert.ok(action3 && action2);
        assert.deepStrictEqual(list.dataStore[0], set1);
        assert.deepStrictEqual(list.dataStore[1], set2);
        assert.deepStrictEqual(list.dataStore[2], set3);
        done();
    });

    it('向List插入WeakMap', function(done){
        var list = new collection.List(), action2 = false, action3 = false;
        var wm1 = new WeakMap(),
            wm2 = new WeakMap(),
            wm3 = new WeakMap();
        list.append(wm1);
        action3 = list.insert(wm3, wm1);
        action2 = list.insert(wm2, wm1);
        assert.strictEqual(list.length(), 3);
        assert.ok(action3 && action2);
        assert.deepStrictEqual(list.dataStore[0], wm1);
        assert.deepStrictEqual(list.dataStore[1], wm2);
        assert.deepStrictEqual(list.dataStore[2], wm3);
        done();
    });

    it('向List插入WeakSet', function(done){
        var list = new collection.List(), action2 = false, action3 = false;
        var ws1 = new WeakSet(),
            ws2 = new WeakSet(),
            ws3 = new WeakSet();
        list.append(ws1);
        action3 = list.insert(ws3, ws1);
        action2 = list.insert(ws2, ws1);
        assert.strictEqual(list.length(), 3);
        assert.ok(action3 && action2);
        assert.deepStrictEqual(list.dataStore[0], ws1);
        assert.deepStrictEqual(list.dataStore[1], ws2);
        assert.deepStrictEqual(list.dataStore[2], ws3);
        done();
    });

    it('向List插入Date', function(done){
        var list = new collection.List();
        var date1 = new Date('1978-6-3'),
            date2 = new Date('1979-6-3'),
            date3 = new Date('1980-6-3');
        list.append(date1);
        action3 = list.insert(date3, date1);
        action2 = list.insert(date2, date1);
        assert.strictEqual(list.length(), 3);
        assert.ok(action3 && action2);
        assert.deepStrictEqual(list.dataStore[0], date1);
        assert.deepStrictEqual(list.dataStore[1], date2);
        assert.deepStrictEqual(list.dataStore[2], date3);
        done();
    });

    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    // JavaScript basic types
    // Data Types: undefined, Boolean, Number, String, BigInt, Symbol
    // Structural Types:
    //   Object (Normal, Array, Map, Set, WeakMap, WeakSet, Date)
    // Structrual Root Primitive: null
    it('向List插入null', function(done){
        done();
    });
});