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

});