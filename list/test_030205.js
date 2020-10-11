// file: test_030205.js
// description: 显示列表中的元素

const assert = require('assert');
const collection = require('./list.js');

describe('3.2.5 toString：显示列表中的元素', function(){
    
    it('int列表的toString', function(done){
        var list = new collection.List();
        for (var i=0; i<5; i++)
            list.append(i);
        assert.strictEqual(list.toString().join(''), '01234');
        done();
    });

    it('string列表的toString', function(done){
        var msg = "hello javascript";
        var list = new collection.List();
        msg.split('').forEach(function(elt) {
            list.append(elt);
        });
        assert.strictEqual(list.length(), msg.length);
        assert.strictEqual(list.toString().join(''), msg);
        done();
    });

    it('null列表的toString', function(done){
        var list = new collection.List();
        for (var i=0; i<5; i++) list.append(null);
        assert.strictEqual(list.length(), 5);
        assert.strictEqual(list.toString().join(''), '');
        done();
    });

    it('undefined列表的toString', function(done){
        var list = new collection.List();
        for (var i=0; i<5; i++) list.append(undefined);
        assert.strictEqual(list.length(), 5);
        assert.strictEqual(list.toString().join(''), '');
        done();
    });
});