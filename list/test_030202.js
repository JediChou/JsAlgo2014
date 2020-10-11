// file: test_030202.js
// description: 测试List的remove方法

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.2 remove：从列表中删除元素', function(){

    it('删除整数列表中的某个数', function(done){
        var list = new collection.List();
        list.append(1);
        list.append(2);
        list.append(3);
        
        var action = list.remove(1);
        assert.strictEqual(list.listSize, 2);
        assert.ok(action);
        assert.strictEqual(list.dataStore[0], 2);
        assert.strictEqual(list.dataStore[1], 3);

        done();
    });

    it('删除字符串列表中的某项', function(done){
        var lst = new collection.List();
        lst.append("jedi");
        lst.append("becky");
        lst.append("cici");

        var action = lst.remove("jedi");
        assert.strictEqual(lst.listSize, 2);
        assert.strictEqual(lst.dataStore.length, 2);
        assert.strictEqual(lst.dataStore[0], "becky");
        assert.strictEqual(lst.dataStore[1], "cici");

        action = lst.remove("cici");
        assert.strictEqual(lst.listSize, 1);
        assert.strictEqual(lst.dataStore[0], "becky");
        assert.ok(action);
        done();
    });

});