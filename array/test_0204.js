// 2.4　可变函数

var assert = require('assert');

describe('2.4 可变函数', function(){

    describe('2.4.1 为数组添加元素', function(){

        it('push()-示例01', function(done){
            var arr = [1,2,3,4,5]
            arr.push(6);
            assert.strictEqual(arr.length, 6);
            assert.strictEqual(arr[arr.length-1], 6);
            done();
        });

    });

});