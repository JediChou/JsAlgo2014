var assert = require('assert');

describe('2.2.3 由字符串生成数组', function(){

    it('有字符串生成数组', function(done){
        var str = "a b c";
        var strArr = str.split(' ');
        assert.strictEqual(strArr[0], 'a');
        assert.strictEqual(strArr[1], 'b');
        assert.strictEqual(strArr[2], 'c');
        done();
    });

});
