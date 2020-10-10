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

    it('查找对象列表中的特定元素', function(done){
        var list = new collection.List();
        var p1 = {name:'jedi', age:42};
        var p2 = {name:'becky', age:37};
        var p3 = {name:'cici', age:8};
        list.append(p1);
        list.append(p2);
        list.append(p3);
        assert.strictEqual(list.find(p1), 0);
        assert.strictEqual(list.find(p2), 1);
        assert.strictEqual(list.find(p3), 2);
        done();
    });

    it('检测没有找到元素时的返回值', function(done){
        var list = new collection.List();
        assert.strictEqual(list.find(1), -1);
        assert.strictEqual(list.find("jedi"), -1);
        assert.strictEqual(list.find({}), -1);
        done();
    });

});