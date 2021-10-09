// file: test_040200.js
// description: 栈的实现

var assert = require('assert');
var collection = require('./statck.js');

describe('4.2　栈的实现', function(){

    it('Stack的初始化', function(done){
        var stack = new collection.Stack();
        assert.strictEqual(stack.dataStore.length, 0);
        assert.deepStrictEqual(stack.dataStore, []);
        done();
    });

    it('测试Stack类的实现-push方法', function(done){
        var stack = new collection.Stack();
        stack.push('jedi');
        stack.push('becky');
        stack.push('cici');
        assert.strictEqual(stack.dataStore.length, 3);
        assert.deepStrictEqual(stack.dataStore, ['jedi', 'becky', 'cici']);
        done();
    });

    it('测试Stack类的实现-pop方法', function(done){
        var stack = new collection.Stack();
        var tmp;
        stack.push('jedi');
        stack.push('becky');
        stack.push('cici');
        
        tmp = stack.pop(); 
        assert.strictEqual(tmp, 'cici');
        assert.strictEqual(stack.length(), 2);

        tmp = stack.pop(); 
        assert.strictEqual(tmp, 'becky');
        assert.strictEqual(stack.length(), 1);

        tmp = stack.pop(); 
        assert.strictEqual(tmp, 'jedi');
        assert.strictEqual(stack.length(), 0);

        tmp = stack.pop(); 
        assert.strictEqual(tmp, undefined);
        assert.strictEqual(stack.length(), -1);
        done();
    });


    it('测试Stack类的实现-peek方法', function(done){
        var stack = new collection.Stack();
        
        stack.push('jedi'); assert.strictEqual(stack.peek(), 'jedi');
        stack.push('becky'); assert.strictEqual(stack.peek(), 'becky');
        stack.push('cici'); assert.strictEqual(stack.peek(), 'cici');
        
        stack.pop(); assert.strictEqual(stack.peek(), 'becky');
        stack.pop(); assert.strictEqual(stack.peek(), 'jedi');
        stack.pop(); assert.strictEqual(stack.peek(), undefined);
        
        done();
    });

    it('测试Stack类的实现-length方法', function(done){
        var stack = new collection.Stack();
        assert.strictEqual(stack.length(), 0);
        stack.push('jedi'); assert.strictEqual(stack.length(), 1);
        stack.push('becky'); assert.strictEqual(stack.length(), 2);
        stack.push('cici'); assert.strictEqual(stack.length(), 3);
        done();
    });

    it('测试Stack类的实现-clear方法', function(done){
        var stack = new collection.Stack();
        stack.clear(); assert.strictEqual(stack.length(), 0);
        stack.push('jedi');
        stack.push('becky');
        stack.push('cici');
        stack.clear(); assert.strictEqual(stack.length(), 0);
        done();
    });
});