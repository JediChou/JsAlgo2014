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

        it('lastIndexOf检测整型数组', function(done){
            assert.strictEqual([1,2,1].lastIndexOf(2), 1);
            assert.strictEqual([1,2,2].lastIndexOf(2), 2);
            done();
        });

    });

    describe('2.3.2 数组的字符串表示', function(){

        it('string_arry.join()-数组的字符串表示', function(done){
            var family = ['jedi', 'becky', 'cici'];
            assert.strictEqual(family.join(), 'jedi,becky,cici');
            done();
        });

        it('int_array.join()-数组的字符串表示', function(done){
            assert.strictEqual([1,2,3].join(), '1,2,3');
            done();
        });

    });

    describe('2.3.3 由已有数组创建新数组', function(){

        it('concat()-数组连接-01', function(done){
            var num_first = [1,2,3];
            var num_second = [4,5,6];
            num_first = num_first.concat(num_second);
            assert.strictEqual(num_first.length, 6);
            done();
        });

        it('concat()-数组连接-02', function(done){
            var arr = ['jedi'].concat(['becky']);
            assert.strictEqual(arr[0], 'jedi');
            assert.strictEqual(arr[1], 'becky');
            done();
        });

        it('concat()-数组连接-03', function(done){
            var arr = [0,1,2];
            arr = arr.concat(arr).concat(arr);
            assert.strictEqual(arr.length, 9);
            for (var i=0; i<arr.length; i++) {
                assert.strictEqual(arr[i], i % 3);
            }
            done();
        });

        it('splice()-数组切片-01', function(done){
            var arr = [1,2,3];
            var tgt = [1,2,3].splice(0, arr.length);
            assert.strictEqual(tgt[0], 1);
            done();
        });

    });


});