// file: test_030208.js
// description: 测试List的contains方法

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.8 contains：判断给定值是否在列表中', function(){

    it('检测列表中是否包含undefined', function(done){
        var list = new collection.List();
        list.append('test');
        list.append(undefined);
        assert.ok(list.contains(undefined));
        done();
    });

    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    // JavaScript basic types
    // Data Types: undefined, Boolean, Number, String, BigInt, Symbol
    // Structural Types:
    //   Object (Normal, Array, Map, Set, WeakMap, WeakSet, Date)
    // Structrual Root Primitive: null
});