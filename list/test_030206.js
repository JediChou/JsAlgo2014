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

    ///////////////////////////////////////////////////////////////////////////////
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    // JavaScript basic types
    // Data Types: undefined, Boolean, Number, String, BigInt, Symbol
    // Structural Types:
    //   Object (Normal, Array, Map, Set, WeakMap, WeakSet, Date)
    // Structrual Root Primitive: null

});