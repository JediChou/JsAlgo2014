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

    it('检测列表中是否包含boolean变量', function(done){
        var list = new collection.List();
        list.append('test');
        list.append(false);
        list.append(true);
        assert.ok(list.contains(false));
        assert.ok(list.contains(true));
        done();
    });

    it('检测列表中包含number变量', function(done){
        var list = new collection.List();
        list.append('test');
        list.append(1);
        list.append(Math.PI);
        assert.ok(list.contains(1));
        assert.ok(list.contains(Math.PI));
        done();
    });

    it('检测列表中包含BigInt变量', function(done){
        var list = new collection.List();
        var bigint_max = BigInt(Number.MAX_SAFE_INTEGER);
        var bigint_min = BigInt(Number.MIN_SAFE_INTEGER);
        list.append(bigint_max);
        list.append(bigint_min);
        assert.ok(list.contains(bigint_max));
        assert.ok(list.contains(bigint_min));
        done();
    });
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    // JavaScript basic types
    // Data Types: undefined, Boolean, Number, String, BigInt, Symbol
    // Structural Types:
    //   Object (Normal, Array, Map, Set, WeakMap, WeakSet, Date)
    // Structrual Root Primitive: null
});