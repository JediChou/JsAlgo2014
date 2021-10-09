// file: test_040301.js
// description: 4.3.1　数制间的相互转换

var assert = require('assert');
var collection = require('./statck.js');

describe('4.3.1　数制间的相互转换', function(){

    ////////////////////////////////////////////////////////////////////////////
    // (1) 最高位为n % b，将此位压入栈。
    // (2) 使用n/b 代替n。
    // (3) 重复步骤1 和2，直到n 等于0，且没有余数。
    // (4) 持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符串形式。

    function mulBase(num, base) {
        var s = new collection.Stack();
        do {
            s.push(num % base);
            num = Math.floor(num / base);
        } while (num > 0);
        var converted = "";
        while (s.length() > 0) {
            converted += s.pop();
        }
        return converted;
    }

    it('将数字转换为二进制和八进制-示例1', function(done){
        assert.strictEqual(mulBase(2, 2), '10');
        assert.strictEqual(mulBase(3, 2), '11');
        assert.strictEqual(mulBase(4, 2), '100');
        assert.strictEqual(mulBase(125, 8), '175');
        done();
    });

});