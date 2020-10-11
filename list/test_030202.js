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

    it('删除对象列表中某项', function(done){
        var list = new collection.List();
        var p1 = {name:"jedi", age:42};
        var p2 = {name:"becky", age:37};
        var p3 = {name:"cici", age:8};
        list.append(p1);
        list.append(p2);
        list.append(p3);
        var action = list.remove(p3);
        assert.ok(action);
        assert.strictEqual(list.listSize, 2);
        assert.strictEqual(list.dataStore[0], p1);
        assert.strictEqual(list.dataStore[1], p2);
        done();
    });

    it('删除对象列表中某项(混合型)', function(done){
        var list = new collection.List();
        var elt1 = 1;
        var elt2 = "message";
        var elt3 = {name:"jedi", age:42};
        list.append(elt1);
        list.append(elt2);
        list.append(elt3);
        assert.ok(list.remove(elt1));
        assert.ok(list.remove(elt3));
        assert.strictEqual(list.listSize, 1);
        assert.strictEqual(list.dataStore.length, 1);
        assert.strictEqual(list.dataStore[0], elt2);
        done();
    });

    it('删除不存在的项', function(done){
        var list = new collection.List();
        assert.ok(!list.remove(1));
        assert.ok(!list.remove(1.1));
        assert.ok(!list.remove("message"));
        assert.ok(!list.remove(null));
        assert.ok(!list.remove(undefined));
        assert.ok(!list.remove({}));
        assert.ok(!list.remove(true));
        assert.ok(!list.remove(false));
        assert.ok(!list.remove([]));
        done();
    });
});