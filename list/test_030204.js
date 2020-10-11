// file: test_030204.js
// description: 测试列表的长度值

const assert = require('assert');
const collection = require('./list.js');

describe('3.2.4 length：列表中有多少个元素', function(){

    it('初始列表的长度为零', function(done){
        var list = new collection.List();
        assert.strictEqual(list.listSize, 0);
        assert.strictEqual(list.length(), 0);
        done();
    });

    it('增加2个元素后检验列表长度', function(done){
        var list = new collection.List();
        list.append(1);
        list.append(2);
        assert.strictEqual(list.length(), 2);
        done();
    });

    it('增加n的元素后检验列表长度', function(done){
        var n = Math.floor(Math.random() * 1000);
        var list = new collection.List();
        for (var i=0; i<n; i++)
            list.append(i);
        assert.strictEqual(list.length(), n);
        done();
    });

    it('删除部分元素后检验列表长度', function(done){
        var n = Math.floor(Math.random() * 100);
        var list = new collection.List();
        for (var i=0; i<n; i++)
            list.append(i+1);
        list.remove(1);
        list.remove(2);
        assert.strictEqual(list.length(), n-2);
        done();
    });

    it('number列表的长度检验', function(done){
        var list = new collection.List();
        var n = 200;
        for (var i=0; i<n; i++) {
            tmp = Math.floor(math.random() * n);
            list.append(tmp);
        }
        assert.strictEqual(list.length(), n);
        done();
    });

});