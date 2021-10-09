var assert = require('assert');

describe('1.2.1　声明和初始化变量', function(){

    it('声明变量', function(){
        // 未赋值的变量
        var number; assert.strictEqual(number, undefined);
        var name; assert.strictEqual(name, undefined);
        
        // 赋值的变量
        var rate = 1.2; assert.strictEqual(rate, 1.2);
        var greeting = 'Hello, world'; assert.strictEqual(greeting, 'Hello, world');
        var flag = false; assert.strictEqual(flag, false);
    });
});