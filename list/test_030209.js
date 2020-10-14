// file: test_030209.js
// description: 测试List的相关迭代器方法.

var assert = require('assert');
var collection = require('./list.js');

describe('3.2.9 遍历列表', function(){

    describe('front测试', function(){
        
        it('front的normal测试', function(done){
            var list = new collection.List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.front();
            assert.strictEqual(list.length(), 3);
            assert.strictEqual(list.pos, 0);
            assert.strictEqual(list.getElement(), 1);
            done();
        });
        
    });

});