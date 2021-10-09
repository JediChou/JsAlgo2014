// file: test_040303.js
// description: 4.3.3　递归演示

var assert = require('assert');
var collection = require('./statck.js');

describe('4.3.3　递归演示', function(){

    // 求阶乘(递归的原始写法)
    function factRec(num) {
        return num === 0 ? 1 : num * factRec(num-1);
    }

    // 求阶乘(栈改写)
    function factStack(num) {
        var s = new collection.Stack(), rlt = 1;
        while(num>0) s.push(num--);
        while(s.length() > 0) rlt *= s.pop();
        return rlt;
    }

    it('递归演示-factRec()', function(done){
        assert.strictEqual(factRec(0), 1);
        assert.strictEqual(factRec(5), 120);
        assert.strictEqual(factRec(6), 720);
        done();
    });

    it('递归演示-factStack()', function(done){
        assert.strictEqual(factStack(0), 1);
        assert.strictEqual(factStack(5), 120);
        assert.strictEqual(factStack(6), 720);
        done();
    });

    it('递归演示-两者比较', function(done){
        assert.strictEqual(factStack(0), factRec(0));
        assert.strictEqual(factStack(5), factRec(5));
        assert.strictEqual(factStack(6), factRec(6));
        assert.strictEqual(factStack(12), factRec(12));
        done();
    });

});