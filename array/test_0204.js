// 2.4　可变函数

var assert = require('assert');

describe('2.4 可变函数', function(){

    describe('2.4.1 为数组添加元素', function(){

        it('push()-示例01', function(done){
            var arr = [1,2,3,4,5];
            arr.push(6);
            assert.strictEqual(arr.length, 6);
            assert.strictEqual(arr[arr.length-1], 6);
            done();
        });

        it('数组元素向后移动', function(done){
            var arr = [2,3];
            var newnum = 1;
            var N = arr.length;
            for (var i=N; i>=0; i--) {
                arr[i] = arr[i-1];
            }
            assert.strictEqual(arr[0], undefined);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);

            arr[0] = newnum;
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            done();
        });

        it('unshif()-示例', function(done){
            var arr = [2,3];
            arr.unshift(1);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            assert.strictEqual(arr.length, 3);
            done();
        });

    });

    describe('2.4.2　从数组中删除元素', function(){

        it('pop()-删除元素的末尾元素-示例', function(done){
            var arr = [1,2,9];
            var val = arr.pop();
            assert.strictEqual(val, 9);
            assert.strictEqual(arr.length, 2);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            done();
        });

        it('shift()-手动版本', function(done){
            var arr = [9,1,2,3];
            for (var i=0; i<arr.length; i++) {
                arr[i] = arr[i+1];
            }
            assert.strictEqual(arr.length, 4);
            assert.strictEqual(arr[0], 1);
            assert.strictEqual(arr[1], 2);
            assert.strictEqual(arr[2], 3);
            // Jedi: 最后一个元素变成了undefined
            // Jedi: 而且array.length是没有变化的
            assert.strictEqual(arr[3], undefined);
            done();
        });

    });

});