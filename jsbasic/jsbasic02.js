var assert = require('assert');

describe('1.2.2　JavaScript中的算术运算和数学库函数', function(){

    it('JavaScript 中的算术运算和数学函数', function(){
        assert.strictEqual(1+2, 3);
        assert.strictEqual(10-5, 5);
        assert.strictEqual(10*5, 50);
        assert.strictEqual(10/5, 2);
        assert.strictEqual(10/3, 3.3333333333333335);   // 注意这个地方
        assert.strictEqual((10/3).toFixed(3), '3.333'); // 注意这个地方
        assert.strictEqual(10%3, 1);
        assert.strictEqual(10%2, 0);
        assert.strictEqual(10%5, 0);
    });
});