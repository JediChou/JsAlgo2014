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

});