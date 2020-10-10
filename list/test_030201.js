// file: test_030201.js
// description: 测试“给列表添加元素”的方法

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.1 append：给列表添加元素', function(){

    it('建立空List', function(done){
        var list = new collection.List();
        assert.strictEqual(list.dataStore.length, 0);
        assert.deepStrictEqual(list.dataStore, []);
        done();
    });

    it('建立一个整数List', function(done){
        var list = new collection.List();
        list.append(10);
        list.append(20);
        assert.strictEqual(list.dataStore.length, 2);
        assert.strictEqual(list.listSize, 2);
        assert.strictEqual(list.dataStore[0], 10);
        assert.strictEqual(list.dataStore[1], 20);
        done();
    });

    it('建立一个字符串List', function(done){
        var list = new collection.List();
        list.append('jedi');
        list.append('becky');
        assert.strictEqual(list.dataStore.length, 2);
        assert.strictEqual(list.listSize, 2);
        assert.strictEqual(list.dataStore[0], 'jedi');
        assert.strictEqual(list.dataStore[1], 'becky');
        done();
    });

    it('建立一个对象List', function(done){
        var list = new collection.List();
        list.append({name:'jedi', age:42});
        list.append({name:'becky', age:37});
        assert.strictEqual(list.dataStore.length, 2);
        assert.strictEqual(list.listSize, 2);
        assert.deepStrictEqual(list.dataStore[0], {name:'jedi', age:42});
        assert.deepStrictEqual(list.dataStore[1], {name:'becky', age:37});
        done();
    });
});