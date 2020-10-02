// 2.3 存储函数

var assert = require('assert');

describe('2.3 存储函数', function(){

    describe('2.3.1 查找元素', function(){

        it('indexOf检测整型数组', function(done){
            var arr = [1,2,3];
            assert.strictEqual(arr.indexOf(1), 0);
            assert.strictEqual(arr.indexOf(2), 1);
            assert.strictEqual(arr.indexOf(3), 2);
            done();
        });

        it('indexOf检测字符串数组', function(done){
            var arr = ['hello', 'jedi', 'becky'];
            assert.strictEqual(arr.indexOf('hello'), 0);
            assert.strictEqual(arr.indexOf('jedi'), 1);
            assert.strictEqual(arr.indexOf('becky'), 2);
            done();
        });

        it('indexOf数组的数组', function(done){
            var arr = [[], [1], [2]];
            assert.ok(Array.isArray(arr[0]));
            assert.ok(Array.isArray(arr[1]));
            assert.ok(Array.isArray(arr[2]));
            done();
            // Jedi: indexOf无法用来搜索数组
        });

        it('indexOf未查询到元素', function(done){
            assert.strictEqual([1,2,3].indexOf(4), -1);
            assert.strictEqual(['a'].indexOf('x'), -1);
            done();
        });

        it('indexOf只返回第一个匹配的元素', function(done){
            assert.strictEqual([1,1,2,1].indexOf(1), 0);
            assert.strictEqual(['a','b','a'].indexOf('a'), 0);
            done();
        });

    });


});