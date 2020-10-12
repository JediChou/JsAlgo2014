// file: test_030207.js
// description: 测试List的clear方法

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.7 clear：清空列表中所有的元素', function(){

    /**
     * 想列表增加一组数据
     * @param {*} list 待增加元素的列表
     * @param {*} arr 待增加元素的数组
     */
    var appendRange = function(list, arr) {
        for (var i=0; i<arr.length; i++)
            list.append(arr[i]);
    };

    it('清空undefined列表', function(done){
        var list = new collection.List();
        appendRange(list, [undefined, undefined]);
        list.clear();
        assert.strictEqual(list.length(), 0);
        assert.strictEqual(list.dataStore.length, 0);
        assert.deepStrictEqual(list.dataStore, []);
        done();
    });

    it('清空boolean列表', function(done){
        var list = new collection.List();
        list.append(true);
        list.append(false);
        list.append(true);
        list.clear();
        assert.strictEqual(list.length(), 0);
        assert.strictEqual(list.dataStore.length, 0);
        assert.deepStrictEqual(list.dataStore, []);
        done();
    });

    it('清空number列表', function(done){
        var list = new collection.List();
        appendRange(list, [1, 2, 3]);
        list.clear();
        assert.strictEqual(list.length(), 0);
        assert.strictEqual(list.dataStore.length, 0);
        assert.deepStrictEqual(list.dataStore, []);
        done();
    });

    it('清空string列表', function(done){
        var list = new collection.List();
        appendRange(list, ["jedi", "becky", "cici"]);
        list.clear();
        assert.strictEqual(list.length(), 0);
        assert.strictEqual(list.dataStore.length, 0);
        assert.deepStrictEqual(list.dataStore, []);
        done();
    });

    it('清空bigint列表', function(done){
        var list = new collection.List();
        var bigint = BigInt(Number.MAX_SAFE_INTEGER);
        appendRange(list, [bigint,bigint,bigint]);
        list.clear();
        assert.strictEqual(list.length(), 0);
        assert.strictEqual(list.dataStore.length, 0);
        assert.deepStrictEqual(list.dataStore, []);
        done();
    });

    it('清空symbol列表', function(done){
        var list = new collection.List();
        var symbol = Symbol('system');
        appendRange(list, [symbol,symbol,symbol]);
        list.clear();
        assert.strictEqual(list.length(), 0);
        assert.strictEqual(list.dataStore.length, 0);
        assert.deepStrictEqual(list.dataStore, []);
        done();
    });
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    // JavaScript basic types
    // Data Types: undefined, Boolean, Number, String, BigInt, Symbol
    // Structural Types:
    //   Object (Normal, Array, Map, Set, WeakMap, WeakSet, Date)
    // Structrual Root Primitive: null
});

