// file: test_030207.js
// description: 测试List的clear方法

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.7 clear：清空列表中所有的元素', function(){

    it('清空undefined列表', function(done){
        var list = new collection.List();
        list.append(undefined);
        list.append(undefined);
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

    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    // JavaScript basic types
    // Data Types: undefined, Boolean, Number, String, BigInt, Symbol
    // Structural Types:
    //   Object (Normal, Array, Map, Set, WeakMap, WeakSet, Date)
    // Structrual Root Primitive: null
});

