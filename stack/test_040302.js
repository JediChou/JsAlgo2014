// file: test_040302.js
// description: 4.3.2　回文

var assert = require('assert');
var collection = require('./statck.js');

describe('4.3.2　回文', function(){

    function isPalindrome(word) {
        var s = new collection.Stack();
        for(var i=0; i<word.length; i++)
            s.push(word[i]);
        rword = "";
        while(s.length() > 0)
            rword += s.pop();
        return rword == word;
    }

    it('判断给定字符串是否是回文的测试', function(done){
        assert.ok(isPalindrome("lol"));
        assert.ok(isPalindrome("racecar"));
        assert.ok(!isPalindrome("hello"));
        done();
    });

});