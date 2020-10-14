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
        // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
        // JavaScript basic types
        // Data Types: undefined, Boolean, Number, String, BigInt, Symbol
        // Structural Types:
        //   Object (Normal, Array, Map, Set, WeakMap, WeakSet, Date)
        // Structrual Root Primitive: null
    });

});