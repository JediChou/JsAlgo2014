// file: test_030203.js
// description: 验证List的find方法

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.3 find：在列表中查找某一元素', function(){

    it('查找整数列表中的特定元素', function(done){
        var list = new collection.List();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        assert.strictEqual(list.find(1), 0);
        assert.strictEqual(list.find(2), 1);
        assert.strictEqual(list.find(3), 2);
        assert.strictEqual(list.find(4), 3);
        done();
    });

    it('查找字符串数组中的特定元素', function(done){
        var list = new collection.List();
        list.append('jedi');
        list.append('becky');
        list.append('cici');
        assert.strictEqual(list.find('jedi'), 0);
        assert.strictEqual(list.find('becky'), 1);
        assert.strictEqual(list.find('cici'), 2);
        done();
    });
});